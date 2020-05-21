import React, { Component } from 'react'
import './App.css';



export default class NavBar extends Component {


    render() {
        return (

<div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Fruits & Vegs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Daily Ideas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Tips & News</a>
      </li>
     
    </ul>
  </div>
  
</nav>


            </div>
        )
    }
}
