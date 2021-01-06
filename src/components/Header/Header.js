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
           
                <div className = 'text-block'>                 
                {/* <h2>Log Out</h2> */}
                <NavLink activeClassName='logout' to ="/logout" style={{ textDecoration: 'none' }} > Log Out</NavLink>
                </div>
                <div className = 'img-block'>                 
                <img src={headerImage2} className='img'/>
                </div>

                <div className = 'head'>
                <img src={headerImage} className='img'/>
                </div>


            </header>
        </div>
    )
}

export default Header;
