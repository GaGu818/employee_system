import { Button, Card, Col, Image, Row } from "antd";
import styles from "../style/header.css";
import { SearchOutlined } from "@ant-design/icons";
import UserTable from "../components/table";
import logoSrc from "../img/image426319.jpg";

const HomePage = () => {
  return (
    <>
      <div style={{ background: "#e27f4b" }}>
        <Row>
          <Col span={16}>
            <h1>eCapital Employee Management System</h1>
          </Col>

          <Col span={4}></Col>
        </Row>
      </div>

      <div style={{ margin: "0 auto", width: "1024px" }}>
        <div style={{ marginTop: "10px" }}>
          <UserTable />
        </div>
      </div>
    </>
  );
};

export default HomePage;
