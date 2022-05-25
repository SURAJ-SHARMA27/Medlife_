
import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home'
import Contact from './components/Contact'
import Description from './components/Description';
import Product_desc from './components/Product_desc';
import Section from './components/Section';







function App() {
  return (
   <>
   <Router>
  
     <Switch>
     <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/description">
            <Description/>
          </Route>
          <Route exact path="/Product_desc" >
            <Product_desc/>
          </Route>
          <Route exact path="/section">
            <Section/>
          </Route>
     </Switch>

    </Router>
   
   </>

   
  )
}


export default App