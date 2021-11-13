import React from "react";
import { useState, useEffect } from "react";
import { InputNumber, Button, Space, Col, Row, Input, Form, Select} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Axios from "axios";


function RecepForm({statue, id}){

    const [statu, setStatu] = useState(Boolean);
    const [resp, setResp] = useState([]);
    const url = 'http://localhost:4000/product';
    useEffect(()=>{
        const getProduct = async ()=>{
            const res = await Axios.get(url);
            setResp(res.data);
        }
        getProduct();
    }, []);

    useEffect(()=>{
        setStatu(statue);
    }, [statue]);

    const AddRecep = async(values) => {
        console.log('Received values of form:', values.ingredients);
        await Axios.post('http://localhost:4000/recipe', values);
    };
      
    const UpdateRecep = async(values) => {
        console.log('Received values of form:', values.ingredients);
        await Axios.put('http://localhost:4000/recipe/'+id, values);
    };
    const { Option } = Select;
    /*{
   "title":"bstila",
   "image":"https://www.khdar.ma/wp-content/uploads/2020/03/Blanc-de-Poulet-500x500.png",
   "ingredients":[
      {
         "product":"613a8567d72b56d567ea92d2",
         "quantite":"1kg",
      },
      {
         "product":"613a8567d72b56d567ea92d2",
         "quantite":"3kg",
      }
   ],
} */

    return(
        <Form layout="vertical" hideRequiredMark onFinish={statu? AddRecep : UpdateRecep}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                        name="title"
                        label="Title"
                        rules={[{ required: true, message: 'Title of recep' }]}
                        >
                            <Input placeholder="Please enter title" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                        name="image"
                        label="Image"
                        rules={[{ required: true, message: 'Picture of recep' }]}
                        >
                            <Input placeholder="Please enter image" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item name="ingredients" label="Ingrediants">
                    <Form.List name="ingredients">
                        {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                <Form.Item
                                {...restField}
                                name={[name, 'product']}
                                fieldKey={[fieldKey, 'product']}
                                rules={[{ required: true, message: 'Missing first produit' }]}
                                >
                                    <Select
                                        showSearch
                                        style={{ width: 200 }}
                                        placeholder="Select ingrediant"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }>
                                            {resp.map((product)=>(
                                                <Option value={product._id} key={product._id} >{product.title}</Option>
                                            ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                {...restField}
                                name={[name, 'quantite']}
                                fieldKey={[fieldKey, 'quantite']}
                                rules={[{ required: true, message: 'Missing quantite' }]}
                                shouldUpdate
                                >
                                    <Input key={fieldKey} placeholder="Please enter quantite" />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                            ))}
                            <Form.Item>
                            <Button type="dashed" onClick={() => {add();}} block icon={<PlusOutlined />}>
                                Add field
                            </Button>
                            </Form.Item>
                        </>
                        )}
                    </Form.List>
                </Form.Item>
                <Row>
                    <Col flex="288px"></Col>
                    <Col flex="auto">
                        <Space align="center">
                            {statu? <Button type="primary" shape="round" size={'large'} htmlType="submit">
                                AJOUTER
                            </Button> 
                            :<Button type="primary" ghost shape="round" size={'large'} htmlType="submit" style={{ marginLeft:  "-35px" }}>
                                Modifier
                            </Button>}
                        </Space>
                    </Col>
                    <Col flex="auto"></Col>
                </Row>
            </Form>
    );
}
export default RecepForm;