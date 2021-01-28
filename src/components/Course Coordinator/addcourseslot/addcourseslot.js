import axios from 'axios';
import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './addcourseslot.css';


class addcourseslot extends Component{
    state = {
        token:this.props.token,
        message:"",
        course:""

    }
    componentDidMount() {
        console.log(this.state.token);
        axios.get('https://advancedcomputerlab-backend.herokuapp.com/viewProfile',{
            headers: {
                'auth-token': this.state.token
            }
          })
          .then(res => {
              console.log("View Profile");
            const course = res.data[0].courses[0];
            this.setState({ course:course });
          });
      }
    HandleAdd()
    {
        let day = document.getElementById("Day").value;
        let timing = document.getElementById("timing").value;
        let type = document.getElementById("Slottype").value;
        let Location = document.getElementById("Location").value;
        Location = null;
        if(day.localeCompare("Select")==0 || timing.localeCompare("Select")==0 || type.localeCompare("Select")==0)
            {
                this.setState({message:"Please Fill The form "});
                return;
            }
        axios.post('https://advancedcomputerlab-backend.herokuapp.com/coordinator/AddSlot',{
            course:this.state.course,//TODO
            day:day,
            timing:timing,
            type:type,
            location:Location
        },{
            headers: {
                'auth-token': this.state.token
            }
          },{withCredentials:true})
            .then((response)=>{
                this.setState({message : "Slot Added Sucessfully"})
            })
            .catch((error)=>{
                this.setState({message : ("Request failed \n" + error)});
                console.log(error);
            });
    }
    render(){
        
        return(
            <div class="main">
            <div class="cardupdate">
            
            <div> 
                <p>
                Choose The day of the Slot.
                <br></br><br></br></p>

                <select class="form-select" id="Day" aria-label="Default select example">
                <option selected>Select</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                </select><br></br><br></br>
            </div>
            <div> 
                <p>
                Choose The timing.
                <br></br><br></br></p>
                <select class="form-select" id="timing" aria-label="Default select example">
                <option selected>Select</option>
                <option value="First">First</option>
                <option value="Second">Second</option>
                <option value="Third">Third</option>
                <option value="Fourth">Fourth</option>
                <option value="Fifth">Fifth</option>
                <option value="Sixth">Sixth</option>
                <option value="Seventh">Seventh</option>
                <option value="Eighth">Eighth</option>
                </select><br></br><br></br>
            </div>

            <div> 
                <p>
                Choose The slot type.
                <br></br><br></br></p>
                <select class="form-select" id="Slottype" aria-label="Default select example">
                <option selected>Select</option>
                <option value="First">Lab</option>
                <option value="Second">Tutorial</option>
                <option value="Third">Lecture</option>
                </select><br></br><br></br>
            </div>
            <label for="Location" class="form-label">Enter The Location : </label>
                <input type="Number" class="form-control" id="Location"></input>
                <br></br><br></br>
            <button type="button" class="btn btn-success" onClick={() => this.HandleAdd()}>Add Slot</button>
            {this.state.message}
            </div>   
            </div>
        )}
}



export default addcourseslot;
