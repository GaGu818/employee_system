import {Button, Col, Image, Row} from "antd"
import {useRouter} from "next/router";
import styles from "@/components/Header/header.module.less";
import {SearchOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {handleLogin, handleLogout} from "@/store/modules/user";
import {useEffect} from "react";
import {userInfo} from "@/api/session";

const Header = () => {
    const router = useRouter()

    return (<>
        <div className={styles.header}>
            <Row>
                <Col span={2} offset={2}>
                    <div className={styles.log}>
                        <Image preview={false} src={'https://duckduckgo.com/assets/logo_homepage.normal.v108.svg'} style={{ height: '48px' }} alt={'logo'} />
                    </div>
                </Col>

                <Col span={16}>
                </Col>

                <Col span={4}>
                </Col>
            </Row>
        </div>
    </>);
};

export default Header;
