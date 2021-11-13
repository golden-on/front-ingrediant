import React from "react";
import { Drawer, Divider, Col, Row,Spin} from 'antd';
import 'antd/dist/antd.css';
import { useState, useEffect} from "react";
import RecepForm from "./RecepForm";
import axios from "axios";


function RecepInfo({visibilite, closeit, id}){

    const [visible, setVisible] = useState(false);
    const [respense, setRespense] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    const onClose = () => {
        setVisible(false);
        closeit(false);
    };

    useEffect(()=>{
        const getRecette = async () =>{
            const result = await axios.get("http://localhost:4000/recipe/"+id);
            setRespense(result.data);
            setIngredients(result.data.ingredients);
            
        }
        getRecette();  
    },[id]);

    useEffect(()=>{
        setVisible(visibilite);
    }, [visibilite]);

    const DescriptionItem = ({ title, content }) => (
        <div className="site-description-item-profile-wrapper">
          <p className="site-description-item-profile-p-label">{title}: {content}</p>  
        </div>
      );

    return(
        <Drawer
        width={640}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}>

            <p className="site-description-item-profile-p" style={{ marginBottom: 24, fontWeight: "bolder" }}>
            RECETTE INFORMATION
            </p>
            <Row>
            <Col span={12}>
                <DescriptionItem title="Recep Name" content={respense.title} />
            </Col>
            <Col span={12}>
                <DescriptionItem title="Image" content={respense.image} />
            </Col>
            </Row>

            <Divider />
            <p className="site-description-item-profile-p" style={{fontWeight: "bolder" }}>INGREDIANTS</p>
                <Row>   
                <Col span={12}> 
                    {ingredients? ingredients.map((ingredient)=>(
                        <DescriptionItem title={ingredient.product.title} content={ingredient.quantite} />
                    )):<Spin size="large" /> }
                </Col>
                </Row>
            <Divider />
            <p className="site-description-item-profile-p" style={{fontWeight: "bolder" }}>MODIFIER</p>
            <RecepForm statue={false} id={id}/>

      </Drawer>
    );
}
export default RecepInfo;