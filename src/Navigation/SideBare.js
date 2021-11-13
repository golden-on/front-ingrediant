import React from "react";
import { Drawer, Button, Space, Col, Row, Input, Form} from 'antd';
import { useState, useEffect} from "react";
import RecepForm from "../Components/RecepForm";
import ProductForm from "../Components/ProductForm";

function SidBare({visibilite, closeit, prodRecep}){

    const [visible, setVisible] = useState(false);


    const onClose = () => {
        setVisible(false);
        closeit(false);
    };

    useEffect(()=>{
        setVisible(visibilite);
    }, [visibilite]);
    //console.log(link);
    return(
        <Drawer
            title={prodRecep ? "Add new product" :"Add new recep"}
            width={720}
            onClose={onClose}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
            extra={
                <Space>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onClose} type="primary">
                    Submit
                </Button>
                </Space>
            }> 
            {prodRecep ? <ProductForm/> : <RecepForm statue={true}/> }  
        </Drawer>
    );
}
export default SidBare;