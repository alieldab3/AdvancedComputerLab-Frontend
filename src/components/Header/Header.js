import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import { Link, NavLink} from 'react-router-dom';

import './Header.css';
import headerImage from "./header3.png";
import headerImage2 from "./GUC.png";





const Header =() =>{

    return(
        
        <div >
            <header className="header" >
                
                <div className = 'img-block'>                 
                <img src={headerImage2} className='img'/>
                </div>

                <div className = 'head'>
                <img src={headerImage} className='img'/>
                </div>

                <div className = 'text-block'>
                   <div class="navbar">
                   <NavLink activeClassName='logout' to ="/logout" style={{ textDecoration: 'none' }} ><i class="fa fa-sign-out"></i> Log Out</NavLink>
                   <NavLink activeClassName='profile' to ="/profile" style={{ textDecoration: 'none' }} ><i class="fa fa-user-o"></i> Profile</NavLink>
                   </div>
                </div>

            </header>
        </div>
    )
}

export default Header;
