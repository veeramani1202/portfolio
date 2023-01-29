import { Button, Form, Input } from "antd";
import React from "react";
import "../styles/register.scss";
import axios from "axios";
import { API_URL } from "../Constants/URL";
import AlertNotification from "./Notification";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 8,
    },
    sm: {
      span: 12,
    },
  },
  wrapperCol: {
    xs: {
      span: 12,
    },
    sm: {
      span: 24,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 16,
      offset: 0,
    },
    sm: {
      span: 12,
      offset: 4,
    },
  },
};
const Registerform = (props) => {
  const { handleChange, isLogin } = props;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const res = axios
      .post(API_URL, {
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
      })
      .then((res) => {
        AlertNotification("success", "created successful", "");
      })
      .catch((error) => {
        AlertNotification("error", "Failed to Create", "");
      });

    console.log(res, "ertyui");
  };

  return (
    <div>
      <p>You Already Have an Account</p>
      <h2
        className="color"
        onClick={() => {
          handleChange(!isLogin);
        }}
      >
        Login Now
      </h2>
      or

      <div className="bag">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          className="register"
        >
                <h3> Register Form</h3>

          <Form.Item
            name="name"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input placeholder="E-Mail" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              placeholder="Phone No"
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Registerform;
