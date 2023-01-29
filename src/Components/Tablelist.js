import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Tag, Modal, Form, Input, Button } from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";
import { API_URL } from "../Constants/URL";
import _ from "lodash";
import AlertNotification from "./Notification";

const Tablelist = () => {
  const [Tabledata, setTabledata] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [useredit, setuseredit] = useState({});
  const [form] = Form.useForm();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(API_URL).then((res) => {
      const order = _.orderBy(res.data, ["id"], ["desc"]);
      console.log(order, "fghjk");
      setTabledata(order);
    });
  };

  const deleteuser = async (id) => {
    setLoading(true);

    await axios
      .delete(API_URL + id)
      .then((res) => {
        fetchData();
        setLoading(false);
      })
      .catch((error) => {
        AlertNotification("error", error.message || "User Not Found", "");
      });
  };

  const handleEdit = (data) => {
    setIsModalOpen(true);
    form.setFieldsValue({
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    });
    console.log(data);
    setuseredit(data);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const name = form.getFieldsValue(["name", "email", "phone", "password"]);
    console.log(name, "yujikmgrvfgbhyjumk");
    axios.put(API_URL + useredit.id, {
      name: name.name,
      email: name.email,
      password: name.password,
      phone: name.phone,
    });
  };

  const columns = [
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "E-MAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "PHONE NO",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "PASSWORD",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "action",
      render: (data) => (
        <span>
          <Tag color="green" onClick={() => handleEdit(data)}>
            <EditTwoTone />
          </Tag>
          <Tag color="green" onClick={() => deleteuser(data.id)}>
            <DeleteTwoTone />
          </Tag>
        </span>
      ),
    },
  ];
  return (
    <div>
      <Table
        loading={Loading}
        columns={columns}
        size="large"
        bordered
        dataSource={Tabledata}
      />
      <Modal
        title="EDIT DETAILS"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <>
            <Button key="back" onClick={handleCancel}>
              cancel
            </Button>
            <Button htmlType="submit" key="submit" onClick={onFinish}>
              ok
            </Button>
          </>,
        ]}
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: false,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: false,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: false,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Tablelist;
