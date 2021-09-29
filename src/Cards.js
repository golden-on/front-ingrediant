import React from "react";
import { useState, useEffect } from "react";
import Axios from 'axios';
import Carte from "./Card";

function Cards(){

    const [resp, setResp] = useState([]);

    useEffect(()=>{
        const getProduct = async ()=>{
            const res = await Axios.get('http://localhost:4000/product');
            setResp(res.data);
        }
        getProduct();
    }, []);

    return(
        <div id="cards">
            <Carte respense={resp} />
        </div>
    );
}
export default Cards;