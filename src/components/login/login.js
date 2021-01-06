import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'

class Login extends Component{

    state={
        loggedIn : false
    }

    handleLogIn = (e) =>{
        this.setState({
        loggedIn : true
        })
    }


    isLogged = (e) =>{
        if ( this.state.loggedIn == false) {
            return <div><h2>Login Need</h2><p>Please log in</p> </div>
        } else {
            return <div><h2>Login Successful</h2> <p>Redirecting to Dashboard</p> </div> 
        }

    }

    render(){
    return(
        <div className="main">
        {this.isLogged()}
        </div>
    )
}
}

export default Login;
