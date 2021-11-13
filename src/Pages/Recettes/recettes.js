import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, Button, Drawer } from 'antd';
import RecepInfo from "../../Components/recepInfo";

function Recettes(){

    const {Meta} = Card;
    const [respense, setRespense] = useState([]);
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState("");

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    useEffect(()=>{
        const getRecette = async () =>{
            const result = await axios.get("http://localhost:4000/recipe");
            setRespense(result.data);
        }
        getRecette();  
    },[])
console.log(respense);
    return(
    <>
        <div id="cards" >
            <Row  gutter={[16, 24]}>
            
                {respense.map((recette)=>(
                    <Col  xs={20} sm={10} md={8} lg={{ span: 5, offset: 1 }}>
                        <Card 
                        cover={<img alt="recette" src={recette.image} />}
                        hoverable style={{width : 240}}>
                            
                            <Meta title={recette.title} />

                            <Row gutter={[48, 16]}>
                            <Col span={12}>
                            </Col>
                            <Col span={12}>
                            </Col>
                            <Col span={12}>
                                <Button type="primary" danger ghost>
                                    Supprimer
                                </Button>
                            </Col>
                            <Col span={8}>
                                <Button type="primary" ghost onClick={()=>{showDrawer(); setId(recette._id)}}>
                                Modifier
                                </Button>
                            </Col>
                            </Row>

                        </Card>
                        <RecepInfo visibilite={visible} closeit={onClose} id={id} />
                    </Col>
                ))}
                
            </Row>
        </div>
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        ></Drawer>
    </>
    );
}
export default Recettes;