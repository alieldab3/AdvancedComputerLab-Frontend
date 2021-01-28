import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import { Link, NavLink} from 'react-router-dom';

import axios from 'axios';

import './viewmyattendance.css';

class viewmyattendance extends Component{

    state ={
        token : this.props.token,
        attendanceRecords : [],
        viewMonth : null,
    }

    componentDidMount() {
        axios.get('https://advancedcomputerlab-backend.herokuapp.com/ViewAttendance/:', {
            headers: {
                'auth-token': this.state.token
            }
          })
          .then(res => {
            const attendanceRecords = res.data;
            this.setState({ attendanceRecords });
          })
      }

      ViewRecords(){
        let recordSelectValue = document.getElementById("FormControlRecords").value;

        if(recordSelectValue=="All"){
            this.setState({viewMonth : false})
            axios.get('https://advancedcomputerlab-backend.herokuapp.com/ViewAttendance/:', {
                headers: {
                    'auth-token': this.state.token
                }
              })
            .then(res => {
              const attendanceRecords = res.data;
              this.setState({ attendanceRecords });
            })
        }
        else if(recordSelectValue!=null){
            this.setState({viewMonth : true})

            axios.get('https://advancedcomputerlab-backend.herokuapp.com/ViewAttendance/'+recordSelectValue, {
                headers: {
                    'auth-token': this.state.token
                }
              })
            .then(res => {
              const attendanceRecords = res.data;
              console.log(res.data)
              this.setState({ attendanceRecords });
            })
        }
      }

    render(){
        let isViewMonth = this.state.viewMonth
        let attendanceRecords = this.state.attendanceRecords
        let RecordDiv = [];

        if (isViewMonth == false) {
            for (let i = 0; i < attendanceRecords.length; i++) {
                RecordDiv[i] = (
            <div>
                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                            <label for={ 'FormControlTime:' + i } class="form-label">Time</label>
                            <input type="text" class="form-control" id={ 'FormControlTime:' + i } placeholder="" value={attendanceRecords[i].time} disabled></input>
                            </div>
                        </div>

                        <div class="col">
                            <div class="mb-3">
                            <label for={ 'FormControlType:' + i } class="form-label">Type</label>
                            <input type="text" class="form-control" id={ 'FormControlType:' + i } placeholder="" value={ (attendanceRecords[i].signIn == true) ? ("Sign In") : ("Sign Out")} disabled></input>
                            </div>
                        </div>
                    </div>

                
                </div>
                )
            }
        }

        else if (isViewMonth == true) {
            for (let i = 0; i < attendanceRecords.length; i++) {
                RecordDiv[i] = (
                    <div>
                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                    <label for={ 'FormControlTime:' + i } class="form-label">Time</label>
                                    <input type="text" class="form-control" id={ 'FormControlTime:' + i } placeholder="" value={attendanceRecords[i].time} disabled></input>
                                    </div>
                                </div>
        
                                <div class="col">
                                    <div class="mb-3">
                                    <label for={ 'FormControlType:' + i } class="form-label">Type</label>
                                    <input type="text" class="form-control" id={ 'FormControlType:' + i } placeholder="" value={ (attendanceRecords[i].signIn == true) ? ("Sign In") : ("Sign Out")} disabled></input>
                                    </div>
                                </div>
                            </div>
        
                        
                        </div>
                        )
            }
        }


    return(
        <div className="mainP">
        <div className="container">
        <div className = 'cardupdate'>
        <form className="form-floating">
        <h5>View My Attendance Records</h5>
                        <br></br>
        <div class="row">
            <div class="col">
                <select class="form-select" id="FormControlRecords" aria-label="Select Record">
                <option selected value="All">All My Records</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
                </select>
            </div>

            <div class="col">
                <div className='Under' >
                <button type="button" class="btn btn-primary"onClick={() => this.ViewRecords()}>View Records</button>
                </div>
            </div>
        </div>
 

        <br></br>

        <div >
            <p>Number of Records : {attendanceRecords.length}</p>
            {RecordDiv}
        </div>

        </form>
        </div>
        </div>
        </div>


    )
    }
}



export default viewmyattendance;
