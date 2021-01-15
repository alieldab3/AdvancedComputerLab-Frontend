import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './viewmymissingdays.css';
import axios from 'axios';


class viewmymissingdays extends Component{

    state = {
        token : this.props.token,
        user : this.props.user,
        myMissingDays : 0,
        viewMonth : null,
    }

    ViewMissingDays(){
        let MissingDaysSelectValue = document.getElementById("FormControlMyMissingDays").value;

        // if(recordSelectValue=="All"){
        //     this.setState({viewMonth : false})
        //     axios.get('http://localhost:5000/ViewAttendance/:', {
        //         headers: {
        //             'auth-token': this.state.token
        //         }
        //       })
        //     .then(res => {
        //       const attendanceRecords = res.data;
        //       this.setState({ attendanceRecords });
        //     })
        // }
        // else 
        if(MissingDaysSelectValue!=null){
            this.setState({viewMonth : true})

            axios.get('http://localhost:5000/ViewMissingDays/'+MissingDaysSelectValue, {
                headers: {
                    'auth-token': this.state.token
                }
              })
            .then(res => {
              const myMissingDays = res.data.missingDays;
              this.setState({ myMissingDays });
            })
        }
      }

    

    render(){
        let isViewMonth = this.state.viewMonth
        let MissingDaysSelectValue = document.getElementById("FormControlMyMissingDays").value;
        let myMissingDays = this.state.myMissingDays
        let RecordDiv = null;

        // if (isViewMonth == true) {
        if (MissingDaysSelectValue != null) {

                RecordDiv = (
                    <div class="mb-3">
                    <label for="FormControlName" class="form-label">Name</label>
                    <input type="text" class="form-control" id="FormControlName" placeholder="My Name" value={this.state.user.name} disabled></input>
                    </div>
                )
        }
        return(
            <div className="mainP">
                <div className="container">
                <div className = 'cardupdate'>
                        <form class="form-floating">
                            <div class="row">
                                <div class="col">
                                    <select class="form-select" id="FormControlMyMissingDays" aria-label="Select Month">
                                        <option selected >Select Month</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option vaSlue="6">June</option>
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
                                    <button type="button" class="btn btn-primary"onClick={() => this.ViewMissingDays()}>View Missing Days</button>
                                    </div>
                                </div>
                            </div>

                            <br></br>

                            <div >
                                <p>{myMissingDays}</p>
                                {RecordDiv}
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



export default viewmymissingdays;
