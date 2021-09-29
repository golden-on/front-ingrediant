import React from "react";
import 'antd/dist/antd.css';
import { Layout, Menu, Button, Space} from 'antd';
import { useState} from "react";
import SidBare from "./SideBare";

function Menue(){

    const { Header} = Layout;
    const [visible, setVisible] = useState();

    const showDefaultDrawer = () => {
        setVisible(true);
      };
    const onClose = (falsValue)=>{
        setVisible(falsValue);
    }

    return(
        <>  
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal">
                    <Space align="center">
                        <Button id="plusBtn" type="primary" onClick={showDefaultDrawer}>
                        <img src="./plus1.png" alt="plus" /></Button>
                    </Space>
                </Menu>
            </Header>
            <SidBare visibilite={visible} closeit={onClose}/>
        </>

    );
}
export default Menue;
