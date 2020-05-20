import React, { Component } from 'react'

export default class NavBar extends Component {


    render() {
        return (
            <div>
                <nav className="mb-4">
        <a href="home"  className="mr-4" >Home</a>
        <a href="fruits"className="mr-4">Fruits & Vegs</a>
        <a href="daily" className="mr-4">Daily Idea</a>
        <a href="./Fruits.js"className="mr-4">Tips & News</a>
     </nav>
            </div>
        )
    }
}
