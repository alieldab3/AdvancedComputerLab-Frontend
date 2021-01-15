import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './controlrequests.css';
import axios from 'axios';
 class controlrequests extends Component {
    state ={
        token : this.props.token,
        AllRequests : []
    }
    componentDidMount() {
        axios.get('http://localhost:5000/coordinator/viewSlotLinking',{
            headers: {
                'auth-token': this.state.token
            }
          })
          .then(res => {
            const AllRequests = res.data;
            this.setState({ AllRequests  :  AllRequests});
        })
      }
      AcceptRequest(rid)
        {
        axios.put('http://localhost:5000/coordinator/acceptSlotLinking',{   
            request_id:rid
            },{
                headers: {
                    'auth-token': this.state.token
                },
                
              },{withCredentials:true})
            .then((response)=>{
                this.setState({message : "Accepted Sucessfully"})
                this.componentDidMountAgain();
            })
            .catch((error)=>{
                this.setState({message : "Acceptance failed"})
                console.log(error);
            });    
        }
        RejectRequest(rid)
        {
        axios.put('http://localhost:5000/coordinator/rejectSlotLinking',{   
            request_id:rid
            },{
                headers: {
                    'auth-token': this.state.token
                },
                
              },{withCredentials:true})
            .then((response)=>{
                this.setState({message : "Rejected Sucessfully"})
                this.componentDidMountAgain();
            })
            .catch((error)=>{
                this.setState({message : "Rejection failed"})
                console.log(error);
            });    
        }


   render () {
    let RenderSlotLinking = [];
    for(let elem of this.state.AllRequests)
    {
        if(this.state.R_state.localeCompare("0")==0 || this.state.R_state.localeCompare(elem.state)==0)
        {
        let cancelEn = (elem.state.localeCompare("Pending")==0 || elem.state.localeCompare("Accepted")==0)?true:false;
       
            RenderSlotLinking.push(
                <tr class = "fathy_row">
                <th scope="row">{elem.rid}</th>
                <td>{elem.type}</td>
                <td>{elem.slot}</td>
                <td>{elem.state}</td>
                <td>{elem.sender}</td>
                <td>{elem.senderComment}</td>
                <td><button type="button"  id = {"Accept"+elem.id} onClick={(e)=>this.AcceptRequest(elem.rid)} class="btn btn-success"disabled = {!cancelEn}>Accept</button></td>
                <td><button type="button"  id = {"Reject"+elem.id} onClick={(e)=>this.RejectRequest(elem.rid)} class="btn btn-success"disabled = {!cancelEn}>Reject</button></td>
                </tr>
            );
        }
    }
    let Slot_Linking_Table = (
        <div>
        <table id = "Slot_Linking_Table" class="table table-striped">
        <thead>
            <tr class = "fathy_row">
            <th scope="col">Id</th>
            <th scope="col">Request Type   </th>
            <th scope="col">Requested slot </th>
            <th scope="col">Request State  </th>
            <th scope="col">Sender          </th>
            <th scope="col">Sender Comment </th>
            <th scope="col">Accept</th>
            <th scope="col">Reject</th>
            </tr>
        </thead>
        <tbody>
            {RenderSlotLinking}
        </tbody>
        </table>
        <br></br><br></br><br></br>
        </div>
    );
     return (
         <div class = "main">
             <label for="Slot_Linking_Table" class="form-label"><h1>Slot-Linking Requests</h1></label>
             {Slot_Linking_Table}
         </div>
    );
   }
 }


export default controlrequests;
