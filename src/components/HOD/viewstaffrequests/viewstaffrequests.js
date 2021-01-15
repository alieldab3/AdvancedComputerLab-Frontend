import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './viewstaffrequests.css';
import axios from 'axios';

class viewstaffrequests extends Component {
    state ={
        token : this.props.token,
        message:"",
        AllRequests : []
    }
    componentDidMount() {
        axios.get('http://localhost:5000/viewRequests',{
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
            let url = 'http://localhost:5000/acceptRequest/'+rid;
            axios.put(url,{
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
            let url = 'http://localhost:5000/rejectRequest/'+rid;
            axios.put(url,{
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

        render(){
        let RenderLeaves = []
        let RenderChangeDayOff = [];

        for(let elem of this.state.AllRequests)
        {
            
            if(elem.type.localeCompare("dayOffChange")==0)
            {
                RenderChangeDayOff.push(
                    <tr class = "fathy_row">
                    <th scope="row">{elem.rid}</th>
                    <td>{elem.type}</td>
                    <td>{elem.newDayoff}</td>
                    <td>{elem.state}</td>
                    <td>{elem.sender}</td>
                    <td>{elem.senderComment}</td>
                    <td><button type="button"  id = {"Accept"+elem.id} onClick={(e)=>this.AcceptRequest(elem.rid)} class="btn btn-success">Accept</button></td>
                    <td><button type="button"  id = {"Reject"+elem.id} onClick={(e)=>this.RejectRequest(elem.rid)} class="btn btn-danger">Reject</button></td>
                    </tr>
                );
            }
            else {
                RenderLeaves.push(
                    <tr class = "fathy_row">
                    <th scope="row">{elem.rid}</th>
                    <td>{elem.type}</td>
                    <td>{elem.RequestedDay}</td>
                    <td>{elem.duration}</td>
                    <td>{elem.state}</td>
                    <td>{elem.sender}</td>
                    <td>{elem.senderComment}</td>
                    <td><button type="button"  id = {"Accept"+elem.id} onClick={(e)=>this.AcceptRequest(elem.rid)} class="btn btn-success">Accept</button></td>
                    <td><button type="button"  id = {"Reject"+elem.id} onClick={(e)=>this.RejectRequest(elem.rid)} class="btn btn-danger">Reject</button></td>
                    </tr>
                );
                }
            
        }
        let ChangeDayOff_Table = (
            <div>
            <table class="table table-striped">
            <thead>
                <tr class = "fathy_row">
                <th scope="col">Id</th>
                <th scope="col">Request Type   </th>
                <th scope="col">New DayOff </th>
                <th scope="col">Request State  </th>
                <th scope="col">Sender          </th>
                <th scope="col">Sender Comment </th>
                <th scope="col">Accept</th>
                <th scope="col">Reject</th>
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
                <th scope="col">Request Type   </th>
                <th scope="col">Requested Day </th>
                <th scope="col">duration </th>
                <th scope="col">Request State  </th>
                <th scope="col">Sender          </th>
                <th scope="col">Sender Comment </th>
                <th scope="col">Accept</th>
            <th scope="col">Reject</th>
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
            {this.state.message}
            <h3>ChangeDayOff Requests</h3><br></br><br></br>
            {ChangeDayOff_Table}
            <h3>Leave Requests</h3><br></br><br></br>
            {Leaves_Table}
        </div>
        )}

 }


export default viewstaffrequests;
