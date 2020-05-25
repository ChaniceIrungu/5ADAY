import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
    
  } from "react-router-dom";
  
  

const NavBar = () => {

return (

  
    <div>


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
       <Link to="/home" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="/season" className="nav-link">Seasons</Link>
      </li>
      <li className="nav-item">
      <Link to="/nutrition" className="nav-link">Nutrition</Link>
      </li>
      <li className="nav-item">
      <Link to="/recipes" className="nav-link">Recipes</Link>
      </li>
      
     
    </ul>
  </div>
  
</nav>
    </div>
   
 
)



}

export default NavBar