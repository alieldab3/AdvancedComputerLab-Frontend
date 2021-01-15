import React , { Component, Fragment } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './viewmymissingdays.css';
import axios from 'axios';


class viewmymissingdays extends Component{

    state = {
        token : this.props.token,
        user : this.props.user,
        myMissingDays : 0,
        viewMonth : null,
        isFailed : null
    }

    ViewMissingDays(){
        let MissingDaysSelectValue = document.getElementById("FormControlMyMissingDays").value;

        if(MissingDaysSelectValue==''){
            this.setState({viewMonth : false,
                myMissingDays : 0})
        }
        else if(MissingDaysSelectValue!=null){
            this.setState({viewMonth : true})

            axios.get('http://localhost:5000/ViewMissingDays/'+MissingDaysSelectValue, {
                headers: {
                    'auth-token': this.state.token
                }
              })
            .then(res => {
                console.log(res.data.missingDays)
              this.setState({ myMissingDays : res.data.missingDays});
            })
            .catch((error)=>{
                this.setState({isFailed : true})
                 console.log(error);
            });
        }
      }

    

    render(){
        let RecordDiv ;
        let Message;

        if (this.state.viewMonth == true && this.state.isFailed != true ) {
                RecordDiv = (
                    <Fragment>
                    <div class="mb-3">
                    <label for="FormControlName" class="form-label">Name</label>
                    <input type="text" class="form-control" id="FormControlName" placeholder="My Name" value={this.state.user.name} disabled></input>
                    </div>

                    <div class="mb-3">
                    <label for="FormControlEmail" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="FormControlEmail" placeholder="name@guc.edu.eg" defaultValue={this.state.user.email} disabled></input>
                    </div>

                    <div class="mb-3">
                    <label for="FormControlMissingDays" class="form-label">Missing Days</label>
                    <input type="text" class="form-control" id="FormControlMissingDays" placeholder="" value={ this.state.myMissingDays} disabled></input>
                    </div>

                    </Fragment>
                )
        }

        
        if (this.state.isFailed == true) {
            Message =( <div class="alert alert-primary" role="alert">
            This was an error! Please, Try again Later.
            </div>)
        }
        return(
            <div className="mainP">
                <div className="container">
                <div className = 'sign'>
                        <form class="form-floating">
                        <h5>View My Missing Days</h5>
                        <br></br>
                            <div class="row">
                                <div class="col">
                                    <select class="form-select" id="FormControlMyMissingDays" aria-label="Select Month">
                                        <option selected value='' >Select Month</option>
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
                                    <button type="button" class="btn btn-primary"onClick={() => this.ViewMissingDays()}>View Missing Days</button>
                                    </div>
                                </div>
                            </div>

                            <br></br>

                            <div >
                                {RecordDiv}
                                {Message}

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



export default viewmymissingdays;
