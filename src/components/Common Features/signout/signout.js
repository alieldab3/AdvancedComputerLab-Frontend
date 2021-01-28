import React , { Component } from 'react';
import './signout.css';
import signmachine from "./signmachine.jpg";
import axios from 'axios';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class signout extends Component {

    state = {
        // person : [],
        token : this.props.token,
        selectedDay: null,
        signedOut : null
    }

    // componentDidMount() {
    //     axios.get('https://advancedcomputerlab-backend.herokuapp.com/viewProfile')
    //       .then(res => {
    //         const person = res.data[0];
    //         this.setState({ person });
    //       })
    //   }

      handleDayChange(day) {
        this.setState({ selectedDay: day });
      }

    handleSignOut(e){
        const stateDay=  this.state.selectedDay;
        let selDay ;
        if (stateDay) {
            selDay = stateDay.toISOString();
             if (this.state.signedOut!=true) {
                axios.post('https://advancedcomputerlab-backend.herokuapp.com/signOut',
                {
                    dateOut : selDay
                }, {
                    headers: {
                        'auth-token': this.state.token
                    }
                  },{withCredentials:true})
                .then((response)=>{
                    this.setState({signedOut : true})
                })
                .catch((error)=>{
                    this.setState({signedOut : false})
                    console.log(error);
                });
             }
        }

    }


    render(){
        const selectedDay = this.state.selectedDay;

        let Message ;

        if (this.state.signedOut == true) {

            Message = (<div class="alert alert-primary" role="alert">
            Successfly Signed Out!
            </div>)
        }
        else if (this.state.signedOut == false) {
            Message =( <div class="alert alert-primary" role="alert">
            This was an error! Please, Try again Later.
            </div>)
        }


    return(
        
        <div className="mainP">
        <div className="container">


        <div className = 'sign'>

            <div> 
            <h5>Sign Out</h5>
            <br></br>
            {/* {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>} */}
            {selectedDay && <h5>Now Click below to Scan your ID</h5>}

            {!selectedDay && <h5>First Choose a Day</h5>}
            <DayPickerInput  onDayChange={this.handleDayChange.bind(this)} />
            

            <div >
            <br></br>
            <img src={signmachine} width='80%' onClick={() => this.handleSignOut()}></img>
            </div>
            {Message}
            </div>
            



            </div>
            </div>
            </div>



    )
    }
}



export default signout;
