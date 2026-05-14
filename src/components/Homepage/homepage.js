import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './homepage.css';

const Homepage =() =>{
    return(
        <div className="main">
            <div className="homepage-container">
                <h1>Welcome to the System</h1>
                <h2>Instructor's Home</h2>
                <p>This is your homepage. Use the navigation menu on the left to access your courses, schedule, and other features.</p>
                <div className="welcome-info">
                    <p>Select an option from the menu to get started.</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
