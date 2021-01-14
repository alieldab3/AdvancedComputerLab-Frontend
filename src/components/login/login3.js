import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import { Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './login.css';
import Image from '../Header/header2.jpg';
import Profile from '../Profile/Profile';

class Login3 extends Component {

    state={
        isLogged : null,
        token : null,
        user:null
    }


    handleloginSub(){
        let loginemail = document.getElementById("loginemail").value;
        let loginPassword = document.getElementById("loginPassword").value;

        console.log(loginemail+" "+loginPassword)
        axios.post('http://localhost:5000/login',
        {
            email : loginemail,
            password : loginPassword,
        },{withCredentials:true})
        .then(res=>{
          this.setState({isLogged : true})

          const token = res.data.token;
          const user = res.data.user;


          this.setState({ 
            token : token,
            user : user
          });

        })
        .catch((error)=>{
            this.setState({isLogged : false})
             console.log(error);
        });

        console.log("Logging In ....")
        console.log(this.state.token)


    }

    render(){
        return(
            <div>
            {/* <Profile data={this.state.token}/> */}

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
                                <button type="submit" class="btn btn-primary" onClick={() => this.handleloginSub()} >Log In</button>
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

            </div>
        )
    }
}

export default Login3;