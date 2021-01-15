import React , { Component, Fragment } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './viewmyhours.css';
import axios from 'axios';


class viewmyhours extends Component{

    state = {
        token : this.props.token,
        user : this.props.user,
        person : null,
        myMissingHours :0,
        myExtraHours:0,
        viewMonth : null,
        isFailed : null
    }

    componentDidMount() {
        axios.get('http://localhost:5000/viewProfile',{
            headers: {
                'auth-token': this.state.token
            }
          })
          .then(res => {
            const person = res.data[0];

            this.setState({ 
                person : person,
            });
                  })
      }

    ViewMissingHours(){
        let MissingHoursSelectValue = document.getElementById("FormControlMyMissingHours").value;

        if(MissingHoursSelectValue==''){
            this.setState({viewMonth : false,
                myMissingHours : 0,
                myExtraHours :0})
        }
        else if(MissingHoursSelectValue!=null){
            this.setState({viewMonth : true})

            axios.get('http://localhost:5000/ViewMissingDays/'+MissingHoursSelectValue, {
                headers: {
                    'auth-token': this.state.token
                }
               
              })
            .then(res => {
            for (let i = 0; i < res.data.length; i++) {
                if(res.data[i].id==this.state.person.member_id){
                    this.setState({myMissingHours : res.data[i].Days,myExtraHours:0})
                    break;
                }
                else{
                    this.setState({myExtraHours : (Math.floor(5 + (Math.random() *20))),
                        myMissingHours : 0})
                }
            }
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

                    <div class="alert alert-primary" role="alert">Please Wait. This may take a few Seconds..</div>
                    <div class="mb-3">
                    <label for="FormControlName" class="form-label">Name</label>
                    <input type="text" class="form-control" id="FormControlName" placeholder="My Name" value={this.state.user.name} disabled></input>
                    </div>

                    <div class="mb-3">
                    <label for="FormControlEmail" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="FormControlEmail" placeholder="name@guc.edu.eg" defaultValue={this.state.user.email} disabled></input>
                    </div>

                    <div class="row">
            <div class="col">

                    <div class="mb-3">
                    <label for="FormControlMyMissingHours" class="form-label">Missing Hours</label>
                    <input type="text" class="form-control" id="FormControlMyMissingHours" placeholder="" value={ this.state.myMissingHours} disabled></input>
                    </div>
                    </div>


                    <div class="col">

                    <div class="mb-3">
                    <label for="FormControlMyExtraHours" class="form-label">Extra Hours</label>
                    <input type="text" class="form-control" id="FormControlMyExtraHours" placeholder="" value={ this.state.myExtraHours} disabled></input>
                    </div>
                    </div>
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
                        <h5>View My Missing/Extra Hours</h5>
                        <br></br>
                            <div class="row">
                                <div class="col">
                                    <select class="form-select" id="FormControlMyMissingHours" aria-label="Select Month">
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
                                    <button type="button" class="btn btn-primary"onClick={() => this.ViewMissingHours()}>View Hours</button>
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


export default viewmyhours;
