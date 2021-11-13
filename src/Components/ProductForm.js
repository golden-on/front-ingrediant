import React from "react";
import { useState, useEffect } from "react";
import { Drawer, Button, Space, Col, Row, Input, Form} from 'antd';
import axios from "axios";


function ProductForm(){

    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState("");
    const [price, setPrice] = useState("");
    const [link, setLink] = useState("");

    const addProduct = async () =>{
        const produit = {image : photo, link : link, price : price, title : title };
        await axios.post('http://localhost:4000/product', produit);
    };


    return(
<Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                    name="title"
                    label="Title"
                    rules={[{ required: true, message: 'asder' }]}
                    >
                    <Input onChange={(e)=>{setTitle(e.target.value)}} placeholder="Please enter title" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                    name="image"
                    label="Image"
                    rules={[{ required: true, message: 'Picture of product' }]}
                    >
                    <Input onChange={(e)=>{setPhoto(e.target.value)}} placeholder="Please enter image" />
                    </Form.Item>
                </Col>
                </Row>
                <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                    name="price"
                    label="Price"
                    rules={[{ required: true, message: 'Price of product' }]}
                    >
                    <Input onChange={(e)=>{setPrice(e.target.value)}} placeholder="Please enter price" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                    name="link"
                    label="Link"
                    rules={[{ required: true, message: 'Link of product' }]}
                    >
                    <Input onChange={(e)=>{setLink(e.target.value)}} placeholder="Please enter Link" />
                    </Form.Item>
                </Col>
                </Row>
                <Row>
                    <Col flex="288px"></Col>
                    <Col flex="auto">
                        <Space align="center">
                            <Button onClick={addProduct} type="primary" shape="round" size={'large'}>
                                AJOUTER
                            </Button>
                        </Space>
                    </Col>
                    <Col flex="auto"></Col>
                </Row>
            </Form>
    );
}
export default ProductForm;