import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import { Link, NavLink} from 'react-router-dom';

import axios from 'axios';

import './viewmyattendance.css';

class viewmyattendance extends Component{

    state ={
        attendanceRecords : [],
    }

    componentDidMount() {
        axios.get('http://localhost:5000/ViewAttendance/:')
          .then(res => {
            const attendanceRecords = res.data;
            this.setState({ attendanceRecords });
          })
      }

    render(){
        let attendanceRecords = this.state.attendanceRecords
         let RecordDiv = [];

        for (let i = 0; i < attendanceRecords.length; i++) {
            RecordDiv[i] = (<div className="mb-3">
            <label for={i+1} class="form-label">Attendance Record {i+1}</label>
            <input type="text" class="form-control" id={i+1} placeholder="My Name" value={'._id: '+attendanceRecords[i]._id + '  signIn: ' + attendanceRecords[i].signIn} disabled></input>
            </div> )
        }

    return(
        <div className="mainP">
        <div className="container">
        <div className = 'cardupdate'>
        <form className="form-floating">

        <div class="row">
            <div class="col">
                <select class="form-select" aria-label="Default select example">
                <option selected>Select Month</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select>
            </div>

            <div class="col">
                <div className='Under' >
                <button type="button" class="btn btn-primary">View Month Records</button>
                </div>
            </div>
        </div>
 

        <br></br>

        <div>
        {RecordDiv}

        </div>

        {/* <div className="mb-3">
        <label for="FormControlName" class="form-label">Name</label>
        <input type="text" class="form-control" id="FormControlName" placeholder="My Name" value={this.state.attendanceRecords} disabled></input>
        </div> */}

        </form>
        </div>
        </div>
        </div>


    )
    }
}



export default viewmyattendance;
