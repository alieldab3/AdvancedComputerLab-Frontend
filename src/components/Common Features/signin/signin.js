import React , { Component } from 'react';
import './signin.css';
import signmachine from "./signmachine.jpg";
import axios from 'axios';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class signin extends Component {

    state = {
        // person : [],
        token : this.props.token,
        selectedDay: null,
        signedIn : null
    }

    // componentDidMount() {
    //     axios.get('http://localhost:5000/viewProfile')
    //       .then(res => {
    //         const person = res.data[0];
    //         this.setState({ person });
    //       })
    //   }

      handleDayChange(day) {
        this.setState({ selectedDay: day });
      }

    handleSignIn(e){
        const stateDay=  this.state.selectedDay;
        let selDay ;
        if (stateDay) {
            selDay = stateDay.toISOString();
            console.log(selDay)
             if (this.state.signedIn!=true) {
                axios.post('http://localhost:5000/signIn',
                {
                    dateIn : selDay
                }, {
                    headers: {
                        'auth-token': this.state.token
                    }
                  },{withCredentials:true})
                .then((response)=>{
                    this.setState({signedIn : true})
                })
                .catch((error)=>{
                    this.setState({signedIn : false})
                    console.log(error);
                });
             }
        }

    }


    render(){
        const selectedDay = this.state.selectedDay;

        let Message ;

        if (this.state.signedIn == true) {

            Message = (<div class="alert alert-primary" role="alert">
            Successfly Signed In!
            </div>)
        }
        else if (this.state.signedIn == false) {
            Message =( <div class="alert alert-primary" role="alert">
            This was an error! Please, Try again Later.
            </div>)
        }


    return(
        
     
     <div className="mainP">
        <div className="container">


        <div className = 'sign'>

            <div> 

            <h5>Sign In</h5>
            <br></br>

            {/* {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>} */}
            {selectedDay && <h5>Now Click below to Scan your ID</h5>}

            {!selectedDay && <h5>First Choose a Day</h5>}
            <DayPickerInput  onDayChange={this.handleDayChange.bind(this)} />


            <div >
            <br></br>

            <img src={signmachine} width='80%'  onClick={() => this.handleSignIn()}></img>
            </div>
            {Message}

            </div>
            



            </div>
            </div>
            </div>

            
    )
    }
}



export default signin;
