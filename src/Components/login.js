import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { API_URL } from "../Constants/URL";
import _ from "lodash";
import axios from "axios";
import AlertNotification from "./Notification";

const Login = (props) => {
  console.log(props, "ghj");
  const Navigate = useNavigate();
  const { handleChange, isLogin } = props;

  const onFinish = (values) => {
    axios
      .get(API_URL)
      .then((res) => {
        const order = _.orderBy(res.data, ["id"], ["desc"]);
        console.log(order, "fg==k");
        const useron = _.some(order, {
          email: values.email,
          password: values.password,
        });
        if (useron) {
          console.log("ikhyedwrhl;hge");
          Navigate("./About");
          localStorage.setItem("isExists", true);
        } else {
          AlertNotification("error", "User Not Found", "");

          console.log("jhgfd");
        }
      })
      .catch((error) => {})

    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        offset: 24,
        span: 24,
      }}
      wrapperCol={{
        offset: 0,
        span: 24,
      }}
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item>
       
        <h1 className="center">Sign Up</h1>

      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="E-Mail"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle></Form.Item>
        <NavLink to="/Forgot Password">Forgot password</NavLink>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
      You Did not have an account
        <h2 className="color"
          onClick={() => {
            handleChange(!isLogin);
          }}
        >
          Register Now
        </h2>
    </Form>
  );
};
export default Login;
