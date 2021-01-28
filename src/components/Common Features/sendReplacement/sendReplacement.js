import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './sendReplacement.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import axios from 'axios';

class sendReplacement extends Component{
    state ={
        token : this.props.token,
        selectedDay:null,
        message:""
    }

    handleDayChange(day) {
        this.setState({ selectedDay: day });
        
    }
    HandleSubmit(){
        let requested_day = this.state.selectedDay;
        let comment = document.getElementById("SenderComment").value;

        axios.post('https://advancedcomputerlab-backend.herokuapp.com/Academics/SendReplacementRequest',{
                requested_day:requested_day,
			    senderComment:comment
            },{
                headers: {
                    'auth-token': this.state.token
                }
              },{withCredentials:true})
            .then((response)=>{
                this.setState({message : "Request Sent Sucessfully"})
            })
            .catch((error)=>{
                this.setState({message : "Request failed"})
                console.log(error);
            });
    }

    render(){
        const selectedDay = this.state.selectedDay;
        return(
            <div class="main">
            <div class="cardupdate">
            
            <div> 
                {/* {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>} */}
                {selectedDay && <p>Please Provide a reason</p>}

                {!selectedDay && <p>First Choose a Day</p>}
                <DayPickerInput  onDayChange={this.handleDayChange.bind(this)} />
                <br></br><br></br>
            </div>
            <div class="mb-3">
            <label for="SenderComment" class="form-label">Provide a reason</label>
            <input type="text" class="form-control" id="SenderComment"></input>
            </div>
            
            <button type="button" class="btn btn-primary" onClick={() => this.HandleSubmit()}>Submit</button>
            <br></br><br></br>
            <p>{this.state.message}</p>
            </div>   
            </div>
        )}
}

// class viewschedule extends Component {
//   render () {
//     return (
//       <BrowserRouter>
//       <Sidebar />
//       {/* <Route exact path='/' component={Index} />
//       <Route path='/contact' component={Contact} /> */}
//     </BrowserRouter>

//    );
//   }
// }


export default sendReplacement;
