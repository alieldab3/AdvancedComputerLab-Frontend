import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import { Link, NavLink} from 'react-router-dom';

import axios from 'axios';

import './viewmyattendance.css';

class viewmyattendance extends Component{

    state ={
        attendanceRecords : [],
        viewMonth : null,
    }

    componentDidMount() {
        axios.get('http://localhost:5000/ViewAttendance/:')
          .then(res => {
            const attendanceRecords = res.data;
            this.setState({ attendanceRecords });
          })
      }

      ViewRecords(){
        let recordSelectValue = document.getElementById("FormControlRecords").value;

        if(recordSelectValue=="All"){
            this.setState({viewMonth : false})
        }
        else if(recordSelectValue!=null){
            this.setState({viewMonth : true})

            axios.get('http://localhost:5000/ViewAttendance/'+recordSelectValue)
            .then(res => {
              const attendanceRecords = res.data;
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
                RecordDiv[i] = (<div className="mb-3">
                <label for={i+1} class="form-label">Attendance Record {i+1}</label>
                <input type="text" class="form-control" id={i+1} placeholder="My Name" value={'._id: '+attendanceRecords[i]._id + '  signIn: ' + attendanceRecords[i].signIn} disabled></input>
                </div> )
            }
        }

        else if (isViewMonth == true) {
            /////////////////////////////////////////////////////////////////////////////////
        }


    return(
        <div className="mainP">
        <div className="container">
        <div className = 'cardupdate'>
        <form className="form-floating">

        <div class="row">
            <div class="col">
                <select class="form-select" id="FormControlRecords" aria-label="Select Record">
                <option selected value="All">All My Records</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
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
            <p>{attendanceRecords.length}</p>
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
