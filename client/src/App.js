import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";


import ApiRecipe from './ApiRecipe';
import ApiNutrition from './ApiNutrition';
import Home from './Home';
import NavBar from './NavBar';



const App = () => {
  
return (

   
   
   
   <Router>

     <div className="App">

<NavBar />

     
     <Switch>
        <Route path="/home">
        <Home />
        </Route>
        <Route path="/recipes">
       <ApiRecipe className="container bg-light" />
       </Route>
       
       <Route path="/nutrition">
       <ApiNutrition />
       </Route>
       
       </Switch>
      
       </div>
 
     </Router>
 
     
   );
 
 }
 

 


export default App;
