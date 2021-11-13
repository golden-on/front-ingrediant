import Cards from "../Pages/Produits/Cards";
import Header from "./Header";
import Menue from "./Menu";
import Recettes from "../Pages/Recettes/recettes";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Card, Layout } from 'antd';

function RouterConfig(){
    return(
        <Router>
        <Switch>
          <div className="App">
          <Layout>
            <Menue/>
            <Layout>
              <Header/>
              <Route exact path="/Produits" >
                <Cards/>
              </Route>
              <Route path="/Recettes" >
                <Recettes/>
              </Route>
            </Layout>
          </Layout>
          </div>
        </Switch>
      </Router>
    );
} 
export default RouterConfig;