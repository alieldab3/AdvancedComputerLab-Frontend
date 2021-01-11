import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import axios from 'axios';
import './resetpassword.css';

class resetpassword extends Component{

    state ={
        person : [],
        PassResetSuccess : null,
        ShowNewPassword : false,
        ShowConfirmPassword : false

    }

    componentDidMount() {
        axios.get('http://localhost:5000/viewProfile')
          .then(res => {
            const person = res.data[0];
            this.setState({ person });
          })
      }

      showNewPass(){
        this.state.ShowNewPassword == true ? (this.setState({ShowNewPassword:false})) : (this.setState({ShowNewPassword:true})) ;
      }

      showConfirmPass(){
        this.state.ShowConfirmPassword == true ? (this.setState({ShowConfirmPassword:false})) : (this.setState({ShowConfirmPassword:true})) ;
      }

      handleReset(){
        let InputNewPassword = document.getElementById("NewPassword").value;
        let InputConfirmPassword = document.getElementById("ConfirmPassword").value;


        console.log(InputNewPassword+" "+InputConfirmPassword)
        axios.put('http://localhost:5000/resetPassword',
        {
            newPassword : InputNewPassword,
            passwordCheck : InputConfirmPassword
        },{withCredentials:true})
        .then((response)=>{
          this.setState({PassResetSuccess : true})
        })
        .catch((error)=>{
            this.setState({PassResetSuccess : false})
             console.log(error);
        });

        console.log("Resetting ....")
      }

    render(){
        let typeNewPassword ;
        let typeConfirmPassword ;

        this.state.ShowNewPassword == true ? (typeNewPassword="text") : (typeNewPassword="password") ;
        this.state.ShowConfirmPassword == true ? (typeConfirmPassword="text") : (typeConfirmPassword="password") ;

        let Message ;

        if (this.state.PassResetSuccess == true) {

            Message = (<div class="alert alert-primary" role="alert">
            Successfly Resetted!
            </div>)
        }
        else if (this.state.PassResetSuccess == false) {
            Message =( <div class="alert alert-primary" role="alert">
            This was an error! Please, Try again Later.
            </div>)
        }


        

    return(
        <div className="mainP">
        <div className="container">


        <div className = 'cardupdate'>

        <form class="form-floating">
            {/* class="form-control is-invalid" */}

        <p>Enter the new password, and then type it again to confirm it.
        <br></br>
        <br></br>

        After saving, you might need to log in again. You'll be notified when your password has been changed successfully.</p>
        <br></br>

        
        <div class="mb-3">
        <label for="FormControlEmail" class="form-label">Email address</label>
        <input type="email" class="form-control" id="FormControlEmail" placeholder="name@guc.edu.eg" defaultValue={this.state.person.email} disabled></input>
        </div>
    

         <div >
         <label for="NewPassword" class="form-label" >New password </label>
            <div class="input-group">
            <input type={typeNewPassword} class="form-control" id="NewPassword" placeholder="New Password"></input>
            <button type="button" class="btn btn-outline-secondary" onClick={() => this.showNewPass()}>Show</button>
            </div>
         </div>


         <div>
         <label for="ConfirmPassword" class="form-label" >Confirm New password</label>
        <div class="input-group mb-3">
        <input type={typeConfirmPassword} class="form-control" id="ConfirmPassword" placeholder="Confirm Password"></input>
        <button type="button" class="btn btn-outline-secondary" onClick={() => this.showConfirmPass()} >Show</button>
        </div>
        </div>




        <div className="right">
        <button type="button" class="btn btn-primary" onClick={() => this.handleReset()}>Reset Password</button>
        </div>

        {Message}

        </form> 
        
        </div>
        </div>
        </div>

    )
}
}



export default resetpassword;