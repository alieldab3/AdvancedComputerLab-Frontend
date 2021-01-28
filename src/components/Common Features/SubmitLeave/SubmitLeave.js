import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './SubmitLeave.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import axios from 'axios';

class SubmitLeave extends Component{
    state ={
        token : this.props.token,
        selectedDay:null,
        message:"",
        leaveDuration:1
    }

    handleDayChange(day) {
        this.setState({ selectedDay: day });
    }
    

    HandleSubmit(){
        let requested_day = this.state.selectedDay;
        let comment = document.getElementById("SenderComment").value;
        let leaveType = document.getElementById("leaveType").value;
        let leaveDuration = document.getElementById("leaveDuration").value;
        this.setState({leaveDuration:leaveDuration});
        axios.post('https://advancedcomputerlab-backend.herokuapp.com/Academics/SubmitLeaveRequest',{
            reason:comment,
            type:leaveType,
            requested_day:requested_day,
            duration:leaveDuration
        },{
            headers: {
                'auth-token': this.state.token
            }
          },{withCredentials:true})
            .then((response)=>{
                this.setState({message : "Leave Request Sent Sucessfully"})
            })
            .catch((error)=>{
                this.setState({message : ("Request failed \n" + error)});
                console.log(error);
            });
    }
    render(){
        const selectedDay = this.state.selectedDay;
        let leaveDuration = this.state.leaveDuration;
        return(
            <div class="main">
            <div class="cardupdate">
            
            <div> 
                {/* {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>} */}
                {selectedDay && <p></p>}

                {!selectedDay && <p>First Choose a Day</p>}
                <DayPickerInput  onDayChange={this.handleDayChange.bind(this)} />
                <br></br><br></br><br></br>
            </div>

            <div class="mb-3">
                <label for="leaveDuration" class="form-label">Enter The Duration in Days : </label>
                <input type="Number" class="form-control" id="leaveDuration"></input>
            </div>
            <br></br>
            <label for="leaveType" class="form-label">Choose The Leave Type : </label>
            <select class="form-select" id="leaveType" aria-label="Default select example">
            <option selected>Type Of Leave</option>
            <option value="Annual">Annual</option>
            <option value="Compensation">Compensation</option>
            <option value="Sick">Sick</option>
            <option value="Maternity">Maternity</option>
            <option value="Accidental">Accidental</option>
            </select>
            <br></br><br></br>

            <div class="mb-3">
            <label for="SenderComment" class="form-label">Provide a reason</label>
            <textarea class="form-control" id="SenderComment" rows="3"></textarea>
            </div>
            

            <button type="button" class="btn btn-primary" onClick={() => this.HandleSubmit()}>Submit</button>
            <br></br><br></br>
            <p>{this.state.message}</p>
            </div>   
            </div>
        )}
}


export default SubmitLeave;
