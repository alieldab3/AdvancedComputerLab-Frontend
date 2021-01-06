import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './homepage.css';

const Homepage =() =>{
    return(
        <div className="main">
            <h2>Home</h2>
            <p>This is homepage</p>
        </div>
    )
}

export default Homepage;
