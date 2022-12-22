import React, { useEffect, useState } from "react";
import {
  Button,
  Space,
  Table,
  Modal,
  Form,
  Input,
  message,
  Card,
  Popconfirm,
  Row,
  Col,
  Image,
} from "antd";
import { addUser, deleteUser, getUser, updateUser } from "../api/session";
import style from "./table.css";
import { PlusOutlined } from "@ant-design/icons";

const UserTable = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [action, setAction] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setUser({});
  };

  const handleUpdateClick = (user) => {
    setUser(user);
    setAction("update");
    setIsModalOpen(true);
  };

  const handleCreateClick = () => {
    setAction("create");
    setIsModalOpen(true);
  };

  const fetchData = () => {
    getUser().then((data) => {
      setData(data);
    });
  };

  const confirm = (record) => {
    deleteUser(record.user_id).then((response) => {
      message.info("delete employee successfully.");
      fetchData();
    });
  };
  const [isViewOpen, setIsViewOpen] = useState(false);

  const handleViewOk = () => {
    setIsViewOpen(false);
  };

  const handleViewCancel = () => {
    setIsViewOpen(false);
    setUser({});
  };

  const handleViewClick = (record) => {
    setUser(record);
    setIsViewOpen(true);
  };

  const onFinish = (values) => {
    if (action === "update") {
      if (
        values.first_name === user.first_name &&
        values.last_name === user.last_name &&
        values.salary === user.salary
      ) {
        message.error("update failed：no change detected");
        return;
      }
      updateUser(user.user_id, values)
        .then((response) => {
          message.info("update employee successfully.");
          fetchData();
        })
        .catch((error) => {
          message.error("Failed.");
        });
    } else {
      addUser(values).then((response) => {
        message.info("create user uccessfully.");
        fetchData();
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    message.error("Failed.");
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            size={"small"}
            shape={"round"}
            type={"primary"}
            onClick={() => handleUpdateClick(record)}
          >
            Update
          </Button>

          <Popconfirm
            placement="top"
            title={"Are you sure to delete this user?"}
            description={"Delete the user"}
            onConfirm={() => confirm(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button size={"small"} shape={"round"} danger>
              Delete
            </Button>
          </Popconfirm>

          <Button
            size={"small"}
            shape={"round"}
            onClick={() => handleViewClick(record)}
          >
            View
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Modal
        title="Employee Profile"
        open={isViewOpen}
        onOk={handleViewOk}
        onCancel={handleViewCancel}
        destroyOnClose
      >
        <Row>
          <Col span={10}>
            <Image
              width={200}
              height={200}
              src="error"
              fallback="data:image/png;base64,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"
            />
          </Col>
          <Col span={12}>
            <ul>
              <li>
                Name: {user.first_name} {user.last_name}
              </li>
              <li>Yearly Salary: ${user.salary}</li>
            </ul>
          </Col>
        </Row>
      </Modal>

      <Modal
        title={
          action === "update"
            ? "Update Employee Information"
            : "Create Employee Information"
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="first name"
            name="first_name"
            initialValue={user.first_name}
            rules={[{ required: true, message: "Please input first name!" }]}
          >
            <Input defaultValue={user.first_name} />
          </Form.Item>

          <Form.Item
            label="last name"
            name="last_name"
            initialValue={user.last_name}
            rules={[{ required: true, message: "Please input last name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="salary"
            name="salary"
            initialValue={user.salary}
            rules={[{ required: true, message: "Please input salary!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <div className={style.main}>
        <Card>
          <Button
            onClick={handleCreateClick}
            type={"primary"}
            icon={<PlusOutlined />}
          >
            ADD EMPLOYEE
          </Button>
        </Card>

        <Table bordered columns={columns} dataSource={data} />
      </div>
    </>
  );
};
export default UserTable;
