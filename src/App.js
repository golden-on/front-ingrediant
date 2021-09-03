import './App.css';
import 'antd/dist/antd.css';
import { Row, Col, Card, Button, Input } from 'antd';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import produits from './legumes.json';

function App() {

  const [prix, setPrix] = useState("");
  const {Meta} = Card;
  useEffect( ()=>{
    console.log(produits);
  },[])

  return (
    <div className="App">
      <Row  gutter={[16, 24]}>
        {produits.map((produit)=>(
          <Col  xs={20} sm={10} md={8} lg={{ span: 5, offset: 1 }}>
            <Card
              hoverable
              style={{width : 240}}
              cover={<img alt="prod" src={produit.image} />} >
                <Button type="link" href={produit.link}>
                  <Meta title={produit.title} />
                </Button>
                <Input style={{textAlign : 'center'}} 
                  onChange={e => setPrix(e.target.value)} 
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
                    <Button type="primary" ghost>
                      Modifier
                    </Button>
                  </Col>
                </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
