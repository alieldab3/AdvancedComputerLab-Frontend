import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import { Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './login.css';
import Image from '../Header/header2.jpg';

class Login3 extends Component {

    render(){
        return(
            <div className="container">
                <div class="row">

                    <div class="col">
                        <div className = 'card8'>
                            <img src={Image} alt='GUC' width='100%' ></img>
                        </div>
                    </div>

                    <div class="col">
                        <div className = 'card4'>

                            <div>
                                <br></br>
                                <br></br>
                                <br></br>

                                <LockOutlinedIcon />
                                <br></br>

                                <h4>Log In</h4>
                                <br></br>
                            </div>

                            <div class='widthed'>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="loginemail" placeholder="name@guc.edu.eg"></input>
                                    <label for="loginemail">Email address</label>
                                </div>

                                <div class="form-floating">
                                    <input type="password" class="form-control" id="loginPassword" placeholder="Password"></input>
                                    <label for="loginPassword">Password</label>
                                </div>
                            </div>

                            <br></br>

                            <div class="form-check">
                                <div className='left'>
                                    <input class="form-check-input" type="checkbox" value="" id="RememberMeCheck"></input>
                                    <label class="form-check-label" for="RememberMeCheck">Remember Me</label>
                                </div>
                            </div>

                            <br></br>

                            <div >
                                <button type="submit" class="btn btn-primary" >Log In</button>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>

                            <div>
                                <p>{'©'}{new Date().getFullYear()}{' GUC Software Systems'}{'.'}</p>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div></div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login3;