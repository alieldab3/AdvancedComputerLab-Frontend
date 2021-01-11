import React , { Component } from 'react';
import './signin.css';
import signmachine from "./signmachine.jpg";
import axios from 'axios';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class signin extends Component {

    state = {
        person : [],
        selectedDay: null,
        signedIn : null
    }

    componentDidMount() {
        axios.get('http://localhost:5000/viewProfile')
          .then(res => {
            const person = res.data[0];
            this.setState({ person });
          })
      }

      handleDayChange(day) {
        this.setState({ selectedDay: day });
      }

    handleSignIn(e){
        const stateDay=  this.state.selectedDay;
        let selDay ;
        if (stateDay) {
            selDay = stateDay.toISOString();
             if (this.state.signedIn!=true) {
                axios.post('http://localhost:5000/signIn',
                {
                    time : selDay
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
        
        <div className="main">


            <div> 
            {/* {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>} */}
            {selectedDay && <h2>Now Click below to Scan your ID</h2>}

            {!selectedDay && <h2>First Choose a Day</h2>}
            <DayPickerInput  onDayChange={this.handleDayChange.bind(this)} />
            </div>
            


            <img src={signmachine} width='50%' className='sign' onClick={() => this.handleSignIn()}></img>

            {Message}

            
        </div>
    )
    }
}



export default signin;
