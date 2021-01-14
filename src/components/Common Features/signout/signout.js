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
    //     axios.get('http://localhost:5000/viewProfile')
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
                axios.post('http://localhost:5000/signOut',
                {
                    time : selDay
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
        
        <div className="main">


            <div> 
            {/* {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>} */}
            {selectedDay && <h2>Now Click below to Scan your ID</h2>}

            {!selectedDay && <h2>First Choose a Day</h2>}
            <DayPickerInput  onDayChange={this.handleDayChange.bind(this)} />
            </div>
            


            <img src={signmachine} width='50%' className='sign' onClick={() => this.handleSignOut()}></img>

            {Message}

            
        </div>
    )
    }
}



export default signout;
