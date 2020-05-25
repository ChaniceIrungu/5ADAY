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
import ApiSeason from './ApiSeason';



const App = () => {
  
return (

   
   
   
   <Router>

     <div className="App">

<NavBar />

     
     <Switch>
        <Route path="/home">
        <Home />
        </Route>

       <Route path="/season">
       <ApiSeason />
       </Route>

       <Route path="/spring">
       <ApiSeason />
       </Route>

       <Route path="/summer">
       <ApiSeason />
       </Route>

       <Route path="/autumn">
       <ApiSeason />
       </Route>

       <Route path="/winter">
       <ApiSeason />
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