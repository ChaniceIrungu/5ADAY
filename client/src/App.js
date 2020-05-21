import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



// import FormFruitsVegs from './FormFruitsVegs';
import ApiRecipe from './ApiRecipe';
import ApiNutrition from './ApiNutrition';

const header = "5 Daily and more... Reach your Goal";
const image = "https://s.yimg.com/ny/api/res/1.2/UYVqvhuvJILX8ZwNmKv3vA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNy4xMzA0MzQ3ODI2MDg3/https://s.yimg.com/uu/api/res/1.2/DHKgUr4Y2ZVMFXRFU8BSiw--~B/aD00OTEyO3c9NzM2MDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2019-11/52156a40-febd-11e9-bd15-10cdaf10fa92";

class App extends React.Component{
  // constructor(props) {
  //   super(props)


  // }

render() {

  return (

    <Router>
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
      <Link to="/fruits" className="nav-link">Fruits & Vegs</Link>
      </li>
      <li className="nav-item">
      <Link to="/daily" className="nav-link">Daily Ideas</Link>
      </li>
      <li className="nav-item">
      <Link to="/tips" className="nav-link">Tips & News</Link>
      </li>
     
    </ul>
  </div>
  
</nav>
    <div className="App">

      <div className="text-center bg-light">
  

<img src={image} alt="" />

<h2 className="mt-4">{header}</h2><br></br>
      
     
     
    </div>  
      
      {/* <FormFruitsVegs /> */}
     <Switch>
       <Route path="/daily">
      <ApiRecipe className="container bg-light" />
      </Route>
      
      <Route path="/fruits">
      <ApiNutrition />
      </Route>
      
      </Switch>
     
    </div>
    </Router>
  );

}

 
}

export default App;
