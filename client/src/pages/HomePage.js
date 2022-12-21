import { Button, Card, Col, Image, Row } from "antd";
import styles from "../style/header.css";
import { SearchOutlined } from "@ant-design/icons";
import UserTable from "../components/table";

const HomePage = () => {
  return (
    <div style={{ margin: "0 auto", width: "1024px" }}>
      <div style={{ marginTop: "10px" }}>
        <UserTable />
      </div>
    </div>
  );
};

export default HomePage;
