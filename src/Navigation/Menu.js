import React,{useState,useEffect} from "react";
import { Layout, Menu, Button, Space} from 'antd';
import 'antd/dist/antd.css';
import {Link, useLocation} from 'react-router-dom';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

function Menue(){

    const { SubMenu } = Menu;
    const [collapsed, setCollapsed] = useState(false);
    const { Header, Content, Footer, Sider } = Layout;
    const route = useLocation();
    console.log('route', route);

    const onCollapse = collapsed => {
      setCollapsed(collapsed);
    };
    return(
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          
          <Menu 
          style={!collapsed?{ position: 'fixed', zIndex: 1, width: '14.5%',top: '10%' } : { position: 'fixed', zIndex: 1, width: '5.7%',top: '10%' }}
          theme="dark" defaultSelectedKeys={route.pathname} mode="inline">
            <Menu.Item key="/Produits" icon={<PieChartOutlined />}>
              <Link to="/Produits" >Products</Link>
            </Menu.Item>
            <Menu.Item key="/Recettes" icon={<DesktopOutlined />}>
              <Link to="/Recettes" >Recettes</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
    );
}
export default Menue;