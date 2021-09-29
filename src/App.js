import './App.css';
import 'antd/dist/antd.css';
import { Card, Layout } from 'antd';
import {useEffect, useState} from 'react';
import produits from './legumes.json';
import Cards from './Cards';
import Menue from './Menu';

function App() {

  const [prix, setPrix] = useState("");
  const {Meta} = Card;
  useEffect( ()=>{
    console.log(produits);
  },[])

  return (
    <div className="App">
      <Layout>
        <Menue/>
        <Cards/>
      </Layout>
    </div>
  );
}

export default App;
