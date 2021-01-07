import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './Profile.css';
import profileImage from "./team2.jpg";



const Profile =() =>{
    return(
        <div className="main">
            <div className="card">
                <div >
                <img src={profileImage} alt="John" width='100%' ></img>
                </div>

                <div>
                <h1>John Doe</h1>
                <p class="title">CEO & Founder, Example</p>
                <p>Harvard University</p>
                <a href="#"><i class="fa fa-dribbble"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-facebook"></i></a>
                <p><button>Contact</button></p>
                </div>
                

            </div>
        </div>
    )
}

export default Profile;
