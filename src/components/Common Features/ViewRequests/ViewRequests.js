import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import axios from 'axios';
import './ViewRequests.css';


class ViewRequests extends Component{
    state ={
        AllRequests : [],
        type:"0",
        R_state:"0"
    }
    FilterRequest(){
        let typeValue = document.getElementById("FilterType").value; 
        let statevalue = document.getElementById("FilterState").value;
        this.setState({
            type:typeValue,
            R_state:statevalue
        });
    }

    componentDidMount() {
        axios.get('http://localhost:5000/:')
          .then(res => {
            const AllRequests = res.data;
            this.setState({ AllRequests  :  AllRequests});
        })
      }

    render(){
        let RenderedR = []
        for(let elem of this.state.AllRequests)
        {
            RenderedR.push(
                <tr class = "fathy_row">
                <th scope="row">{elem.rid}</th>
                <td>{elem.type}</td>
                <td>{elem.RequestedDay}</td>
                <td><button type="button" onClick={this.handleCancelation(elem.rid)} class="btn btn-danger">Cancel</button></td>
                </tr>
            );
        }

        return(
            <div class = "main">
            
            <div class="row">
            <div class="col">
                <select class="form-select" id="FilterType" aria-label="Select Record">
                <option selected value="0">All My Requests</option>
                <option value="Compensation">Compensation</option>
                <option value="Replacement">Replacement</option>
                <option value="Annual">Annual</option>
                <option value="Slot-linking">Slot-linking</option>
                <option value="dayOffChange">dayOffChange</option>
                <option value="Sick">Sick</option>
                <option value="Maternity">Maternity</option>
                <option value="Accidental">Accidental</option>
                </select>
            </div>
            <div class="col">
                <select class="form-select" id="FilterState" aria-label="Select Record">
                <option selected value="0">All My Requests</option>
                <option value="Pending">Pending</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
                <option value="Cancelled">Cancelled</option>
                </select>
            </div>

            <div class="col">
                <div className='Under' >
                <button type="button" class="btn btn-primary"onClick={() => this.FilterRequest()}>View Requests</button>
                </div>
            </div>
        </div>
            <table class="table table-striped">
            <thead>
                <tr class = "fathy_row">
                <th scope="col">Id</th>
                <th scope="col">Request Type</th>
                <th scope="col">Requested Day </th>
                <th scope="col">Cancel</th>
                </tr>
            </thead>
            <tbody>
                {RenderedR}
            </tbody>
            </table>
            </div>
        )}
    
}


export default ViewRequests;
