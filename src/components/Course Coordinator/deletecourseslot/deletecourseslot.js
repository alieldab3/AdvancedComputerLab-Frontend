import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './deletecourseslot.css';
import axios from 'axios';
class deletecourseslot extends Component{
    state = {
        token:this.props.token,
        message:"",
        AllSlots:[]
    }
    componentDidMountAgain(){
        axios.get('http://localhost:5000/coordinator/AllCourseSlots',{
            headers: {
                'auth-token': this.state.token
            }
          })
          .then(res => {
              console.log("Get All Slots");
              let AllSlots = res.data;
              this.setState({AllSlots:AllSlots});
          });
    }
    componentDidMount() {
        axios.get('http://localhost:5000/coordinator/AllCourseSlots',{
            headers: {
                'auth-token': this.state.token
            }
          })
          .then(res => {
              console.log("Get All Slots");
              let AllSlots = res.data;
              this.setState({AllSlots:AllSlots});
          });
      }
    HandleDelete()
    {
        let sid = document.getElementById("SlotToDelete").value;
        if(sid.localeCompare("Select") == 0)
        {
            this.setState({message:"Please Select slot"});
            return;
        }
        axios.delete('http://localhost:5000/coordinator/deleteSlot',{
                headers: {
                    'auth-token': this.state.token
                },
                data:{   
                    sid:sid
                }
              },{withCredentials:true})
            .then((response)=>{
                this.setState({message : "Slot deleted Sucessfully"})
                this.componentDidMountAgain();
            })
            .catch((error)=>{
                this.setState({message : "deletion failed"})
                console.log(error);
            });    
    }
    render(){
        let options = [];
        for(let elem of this.state.AllSlots)
        {
            options.push(<option value={elem.sid}>{"Day: "+elem.day + " Timing: "+elem.timing + " Location: "+elem.location}</option>
            );
        }

        return(
            <div class="main">
            <div class="cardupdate">
                <h3>Select The Slot You Want to delete</h3>
                <select class="form-select" id="SlotToDelete" aria-label="Default select example">
                <option selected>Select</option>
                {options}
                </select><br></br><br></br>
                <button type="button" class="btn btn-danger" onClick={() => this.HandleDelete()}>Delete Slot</button>
                <br></br><br></br>
                <h3>{this.state.message}</h3>

            </div>   
            </div>
        )}
}





export default deletecourseslot;
