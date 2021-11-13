import React, {useEffect, useState} from "react";
import { Row, Col, Card, Button, Input } from 'antd';
import Axios from 'axios';

function Modifier({update,id,path}){

    const updateProduct = async () =>{
        const produit = update;
        const res = await Axios.put('http://localhost:4000/'+path+id, produit);
        console.log(res);
        console.log(id);
    };

    return(
        <Col span={8}>
            <Button onClick={updateProduct} type="primary" ghost>
                Modifier
            </Button>
        </Col>
    );
}
export default Modifier;