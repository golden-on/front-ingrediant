import React from "react";
import 'antd/dist/antd.css';
import { Layout, Menu, Button, Space} from 'antd';
import { useState} from "react";
import SidBare from "./SideBare";



function Header(){

    const { SubMenu } = Menu;

    const { Header} = Layout;
    const [visible, setVisible] = useState();
    const [prodRecep, setProdRecep] = useState(Boolean);

    const showDefaultDrawer = (bolvar) => {
        setVisible(true);
        setProdRecep(bolvar)
      };
      //console.log(prodRecep);
    const onClose = (falsValue)=>{
        setVisible(falsValue);
    }

    return(
        <>  
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal">
                        <Space align="center" size={"large"}>
                            <SubMenu icon={<img src="./plus1.png" alt="plus" />}>
                                <Menu.ItemGroup>
                                    <Menu.Item key="setting:1" onClick={()=> showDefaultDrawer(true)}>Add Product</Menu.Item>
                                    <Menu.Item key="setting:2" onClick={()=> showDefaultDrawer(false)}>Add Recette</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>

                        </Space>                   
                    </Menu>
                </Header>
  
            <SidBare visibilite={visible} closeit={onClose} prodRecep={prodRecep}/>
        </>

    );
}
export default Header;
