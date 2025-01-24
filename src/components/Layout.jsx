import React from 'react';
import logo from '../assets/smit-logo.png';
import {Layout, Menu, theme } from 'antd';
import { useNavigate} from 'react-router';

const { Header, Content, Footer } = Layout;
const items =  [{
key: "/home",
label: "Home",
},{
key: "/about",
label: "About",
},{
key: "/services",
label: "Services",
},{
key: "/contact",
label: "Contact",
}];

const AppLayout = ({children}) => {

const {
token: { colorBgContainer, borderRadiusLG },
} = theme.useToken();
const navigate = useNavigate();

  return (
    <Layout style={{
        height: '100vh'
    }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="demo-logo" />
        <img src={logo} alt="smit-logo" style={
            {
        width:'130px',
        height:'130px',
        marginTop: '11px'
            }}/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          onClick={(data) => 
        {
          console.log(data);
          navigate(data.key)
          
          }}
          style={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '30px',
            fontStyle: 'italic'
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
          margin: '15px',
          fontSize: '38px',
          textAlign: 'center',
          fontStyle:'italic',
          fontWeight: 'bolder',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 550,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
      react App ©{new Date().getFullYear()} Created by Mariyam Saleem
      </Footer>
    </Layout>
  );
};
export default AppLayout;