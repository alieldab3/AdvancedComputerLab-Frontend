import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import axios from 'axios';
import './ViewRequests.css';


class ViewRequests extends Component{
    state ={
        token : this.props.token,
        AllRequests : [],
        type:"0",
        R_state:"0"
    }
    FilterRequest(){
        console.log("View Request");
        let typeValue = document.getElementById("FilterType").value; 
        let statevalue = document.getElementById("FilterState").value;
        this.setState({
            type:typeValue,
            R_state:statevalue
        });
    }
    
    componentDidMount() {
        console.log(this.state.token);
        axios.get('http://localhost:5000/Academics/ViewRequests/:',{
            headers: {
                'auth-token': this.state.token
            }
          })
          .then(res => {
            const AllRequests = res.data;
            this.setState({ AllRequests  :  AllRequests});
        })
      }
    
      componentDidMountAgain()
      {
        axios.get('http://localhost:5000/Academics/ViewRequests/:',{
            headers: {
                'auth-token': this.state.token
            }
          })
          .then(res => {
            const AllRequests = res.data;
            this.setState({ AllRequests  :  AllRequests});
        })
      }
    handleCancelation(rid)
    { 
        console.log(typeof rid);
        console.log(this.state.token);
        axios.delete('http://localhost:5000/Academics/DeleteRequest',{
                headers: {
                    'auth-token': this.state.token
                },
                data:{   
                        request_id:rid
                }
              },{withCredentials:true})
            .then((response)=>{
                this.setState({message : "Request deleted Sucessfully"})
                this.componentDidMountAgain();
            })
            .catch((error)=>{
                this.setState({message : "deletion failed"})
                console.log(error);
            });    
    }

    render(){
        let RenderLeaves = []
        let RenderSlotLinking = [];
        let RenderChangeDayOff = [];

        for(let elem of this.state.AllRequests)
        {
            if(this.state.R_state.localeCompare("0")==0 || this.state.R_state.localeCompare(elem.state)==0)
            {
            let cancelEn = (elem.state.localeCompare("Pending")==0 || elem.state.localeCompare("Accepted")==0)?true:false;
            if(elem.type.localeCompare("Slot-linking")==0)
            {
                RenderSlotLinking.push(
                    <tr class = "fathy_row">
                    <th scope="row">{elem.rid}</th>
                    <td>{elem.type}</td>
                    <td>{elem.slot}</td>
                    <td>{elem.state}</td>
                    <td><button type="button"  id = {"Cancel"+elem.id} onClick={(e)=>this.handleCancelation(elem.rid)} class="btn btn-danger"disabled = {!cancelEn}>Cancel</button></td>
                    </tr>
                );
            }
            else if(elem.type.localeCompare("dayOffChange")==0)
            {
                RenderChangeDayOff.push(
                    <tr class = "fathy_row">
                    <th scope="row">{elem.rid}</th>
                    <td>{elem.type}</td>
                    <td>{elem.newDayoff}</td>
                    <td>{elem.state}</td>
                    <td><button type="button" id = {"Cancel"+elem.id} onClick={(e)=>this.handleCancelation(elem.rid)} class="btn btn-danger"disabled = {!cancelEn}>Cancel</button></td>
                    </tr>
                );
            }
            else {
                if(this.state.type.localeCompare(elem.type) == 0 || this.state.type.localeCompare("0") == 0)
                {
                RenderLeaves.push(
                <tr class = "fathy_row">
                <th scope="row">{elem.rid}</th>
                <td>{elem.type}</td>
                <td>{elem.RequestedDay}</td>
                <td>{elem.duration}</td>
                <td>{elem.state}</td>
                <td><button type="button" id = {"Cancel"+elem.id}  onClick={(e)=>this.handleCancelation(elem.rid)} class="btn btn-danger" disabled = {!cancelEn}>Cancel</button></td>
                </tr>
                );
                }
                }
            }
        }
        let Slot_Linking_Table = (
            <div>
            <table class="table table-striped">
            <thead>
                <tr class = "fathy_row">
                <th scope="col">Id</th>
                <th scope="col">Request Type   </th>
                <th scope="col">Requested slot </th>
                <th scope="col">Request State  </th>
                <th scope="col">Cancel</th>
                </tr>
            </thead>
            <tbody>
                {RenderSlotLinking}
            </tbody>
            </table>
            <br></br><br></br><br></br>
            </div>
        );
        let ChangeDayOff_Table = (
            <div>
            <table class="table table-striped">
            <thead>
                <tr class = "fathy_row">
                <th scope="col">Id</th>
                <th scope="col">Request Type   </th>
                <th scope="col">New Day-off </th>
                <th scope="col">Request State  </th>
                <th scope="col">Cancel</th>
                </tr>
            </thead>
            <tbody>
                {RenderChangeDayOff}
            </tbody>
            </table>
            <br></br><br></br><br></br>
            </div>
        );
        
        let Leaves_Table = (
            <div>
            <table class="table table-striped">
            <thead>
                <tr class = "fathy_row">
                <th scope="col">Id</th>
                <th scope="col">Request Type  </th>
                <th scope="col">Requested Day </th>
                <th scope="col">Duration </th>
                <th scope="col">Request State </th>
                <th scope="col">Cancel</th>
                </tr>
            </thead>
            <tbody>
                {RenderLeaves}
            </tbody>
            </table>
            <br></br><br></br><br></br>
            </div>
        );
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
            <div class="col">
                <div className='Under' >
                <h2> {this.state.message}</h2>
                </div>
            </div>
        </div>
            {(this.state.type.localeCompare("0") == 0 || this.state.type.localeCompare("Slot-linking") == 0)?Slot_Linking_Table:""}
            {(this.state.type.localeCompare("0") == 0 || this.state.type.localeCompare("dayOffChange") == 0)?ChangeDayOff_Table:""}
            {(!(this.state.type.localeCompare("dayOffChange") == 0 
            || this.state.type.localeCompare("Slot-linking") == 0))?
            Leaves_Table:""}
            </div>
        )}
    
}


export default ViewRequests;
