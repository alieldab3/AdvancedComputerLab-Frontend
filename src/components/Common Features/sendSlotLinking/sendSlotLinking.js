import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './sendSlotLinking.css';
import axios from 'axios';

class sendSlotLinking extends Component{
    state ={
        token : this.props.token,
        message:"",
        availableSlots:[]
    }

    componentDidMount() {
        axios.get('https://advancedcomputerlab-backend.herokuapp.com/AllCourseSlots',{
            headers: {
                'auth-token': this.state.token
            }
          })
          .then(res => {
            this.setState({ availableSlots:res.data });
          });
      }
    
    HandleSubmit()
    {
        let slot_id =  document.getElementById("TheSlot").value;
        let comment = document.getElementById("SenderComment").value;

        axios.post('https://advancedcomputerlab-backend.herokuapp.com/Academics/SendSlotLinkingRequest',{
                slot_id:slot_id,
			    senderComment:comment
            },{
                headers: {
                    'auth-token': this.state.token
                }
              },{withCredentials:true})
            .then((response)=>{
                this.setState({message : "Request Sent Sucessfully"})
            })
            .catch((error)=>{
                this.setState({message : "Request failed"})
                console.log(error);
            });
    }

    render(){
        
        let options = [];
        for(const elem of this.state.availableSlots)
        {
            options.push(<option value={elem.sid}>{elem.type +" "+elem.sid + " " +elem.timing + " "}</option>);
        }

        return(
            <div class="main">
            <div class="cardupdate">
            
            <div> 
                <p>
                Choose The Slot, and then submit to send your Request.
                <br></br>
                <br></br>
                After submission, A new Request will be sent to The course Instructor.
                <br></br>
                You'll be notified when your Request is rejected / Accepted<br></br><br></br></p>

                <select class="form-select" id="TheSlot" aria-label="Default select example">
                <option selected>Select The Slot</option>
                {options}
                </select><br></br>
            </div>
            <div class="mb-3">
            <label for="SenderComment" class="form-label">Provide a reason</label>
            <input type="text" class="form-control" id="SenderComment"></input>
            </div>
            
            <button type="button" class="btn btn-primary" onClick={() => this.HandleSubmit()}>Submit</button>
            <br></br><br></br>
            <p>{this.state.message}</p>
            </div>   
            </div>
        )}
}
export default sendSlotLinking;
