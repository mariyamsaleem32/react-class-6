import React from 'react';
import AppSearch from './Search';
import Logo from '../assets/deal-logo.svg';
import CustomNavbar from '../router/index';
import { Row, Col} from 'antd';

const Main = () => {
    return (
        <>
        <Row style={{marginTop : '25px'}}>
        <Col span={8}>
            <img src={Logo} alt="" />
        </Col>
        <Col span={8}>
        <AppSearch/>
        </Col>
        <Col span={8}>
            <AppSearch/>
        </Col>
        </Row>
        <Row>
<CustomNavbar/>
        </Row>
        </>
    );
}

export default Main;