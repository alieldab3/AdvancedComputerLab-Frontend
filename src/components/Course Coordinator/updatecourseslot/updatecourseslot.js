import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './updatecourseslot.css';
import axios from 'axios';
class updatecourseslot extends Component{
    state = {
        token:this.props.token,
        message:"",
        AllSlots:[]
    }
    componentDidMountAgain(){
        axios.get('https://advancedcomputerlab-backend.herokuapp.com/coordinator/AllCourseSlots',{
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
        axios.get('https://advancedcomputerlab-backend.herokuapp.com/coordinator/AllCourseSlots',{
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

      HandleUpdate()
      {
        let sid = document.getElementById("SlotToUpdate").value;
        let day = document.getElementById("Day").value;
        let timing = document.getElementById("timing").value;
        let type = document.getElementById("Slottype").value;
        let Location = document.getElementById("Location").value;
        Location = null;
          if(sid.localeCompare("Select") == 0)
          {
              this.setState({message:"Please Select slot"});
              return;
          }
          
          axios.put('https://advancedcomputerlab-backend.herokuapp.com/coordinator/updateSlot',{
                sid:sid,
                day:day.localeCompare("Select")?day:undefined,
                timing:timing.localeCompare("Select")?timing:undefined,
                type:type.localeCompare("Select")?type:undefined,
                location:Location
            },{
                headers: {
                    'auth-token': this.state.token
                }
            },{withCredentials:true})
                .then((response)=>{
                    this.setState({message : "Slot Updated Sucessfully"})
                    this.componentDidMountAgain();
                })
                .catch((error)=>{
                    this.setState({message : ("Request failed \n")});
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
        let updateValue = (
            <div>
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
            <button type="button" class="btn btn-primary" onClick={() => this.HandleUpdate()}>Update Slot</button>
            </div>
        )
        return(
            <div class="main">
            <div class="cardupdate">
            <h3>Select The Slot You Want to Update</h3>
            
            <select class="form-select" id="SlotToUpdate" aria-label="Default select example">
            <option selected>Select</option>
            {options}
            </select><br></br><br></br>

            {updateValue}<br></br><br></br>
            {this.state.message}
            </div>   
            </div>
        )}
}
export default updatecourseslot;
