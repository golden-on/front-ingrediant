import React from "react";
import { Row, Col, Card, Button, Input } from 'antd';
import { useState } from "react";
import Axios from 'axios';

function Carte({respense}){
    
    const {Meta} = Card;
    const [prix, setPrix] = useState("");
    const [id, setId] = useState("");

    const updateProduct = async () =>{
        const produit = { price : prix};
        const res = await Axios.put('http://localhost:4000/product/'+id, produit);
        console.log(res);
        console.log(id);
    };

    return(
        <>
             <Row  gutter={[16, 24]}>
                {respense.map((produit)=>(
                <Col key={produit._id} xs={20} sm={10} md={8} lg={{ span: 5, offset: 1 }}>
                    <Card
                    hoverable
                    style={{width : 240}}
                    cover={<img alt="prod" src={produit.image} />} >
                        <Button type="link" href={produit.link}>
                        <Meta title={produit.title} />
                        </Button>
                        <Input style={{textAlign : 'center'}} 
                        onChange={e => {setPrix(e.target.value); setId(produit._id)}} 
                        defaultValue={produit.price} 
                        bordered={false}
                        />
                        <Row gutter={[48, 8]}>
                        <Col span={12}>
                            <Button type="primary" danger ghost>
                                Supprimer
                            </Button>
                        </Col>
                        <Col span={8}>
                            <Button onClick={updateProduct} type="primary" ghost>
                            Modifier
                            </Button>
                        </Col>
                        </Row>
                    </Card>
                </Col>
                ))}
            </Row>
        </>
    );
}
export default Carte;