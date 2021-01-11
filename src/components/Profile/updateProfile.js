import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import { Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import './Profile.css';


class updateProfile extends Component {

    state ={
        person : [],
        // name : 'Ali El Dabaa',
        // member_id : '123',
        // gender : 'Male',
        // email : 'alihaha@gmail.com',
        // officeLocation : 'C3.215',
        // role: 'CEO & Founder, HR Baba',
        // // dayoff : 'Friday',
        // salary : 555,
        // faculty : null,
        // department : null,

        SaveState : null
    }

    componentDidMount() {
        axios.get('http://localhost:5000/viewProfile')
          .then(res => {
            const person = res.data[0];
            this.setState({ person });
          })
      }

    handleSave(e){
        let newGender = document.getElementById("FormControlGender").value;
        let newEmail = document.getElementById("FormControlEmail").value;
        let newOfficeLocation = document.getElementById("FormControlOffice").value;
        // let newSalary = document.getElementById("FormControlSalary").value;
        // let newRole = document.getElementById("FormControlRole").value;
         let newDayOff = document.getElementById("FormControlDayOff").value;

        console.log(newGender+" "+newEmail+" "+newOfficeLocation+" "+newDayOff)
        axios.put('http://localhost:5000/updateProfile',
        {
            email : newEmail,
            gender : newGender,
            officeLocation : newOfficeLocation,
            dayoff : newDayOff
            // salary : parseInt(newSalary)
        },{withCredentials:true})
        .then((response)=>{
          this.setState({SaveState : true})
        })
        .catch((error)=>{
            this.setState({SaveState : false})
             console.log(error);
        });

        console.log("Saving ....")

    }



    render(){
        let otherGender;
        this.state.person.gender=='Male' ? (otherGender = 'Female') : (otherGender = 'Male') ;

        let department;
        let faculty;

        let Message ;

        if (this.state.person.department !=null) {
            faculty = (
                <div class="mb-3">
                <label for="FormControlFaculty" class="form-label">Faculty</label>
                <input type="text" class="form-control" id="FormControlFaculty" placeholder="MET" defaultValue={this.state.person.faculty} disabled></input>
                </div>
            )
        }

        if (this.state.person.faculty !=null) {
             department= (
                <div class="mb-3">
                <label for="FormControlDepartment" class="form-label">Department</label>
                <input type="text" class="form-control" id="FormControlDepartment" placeholder="Computer Science & Engineering" defaultValue={this.state.person.department} disabled></input>
                </div>
            )
        }

        if (this.state.SaveState == true) {

            Message = (<div class="alert alert-primary" role="alert">
            Successfly Saved!
            </div>)
        }
        else if (this.state.SaveState == false) {
            Message =( <div class="alert alert-primary" role="alert">
            This was an error! Please, Try again Later.
            </div>)
        }
           
        
        return(
     
        <div className="mainP">
        <div className="container">


        <div className = 'cardupdate'>

        <form class="form-floating">
            {/* class="form-control is-invalid" */}

        <div class="mb-3">
        <label for="FormControlName" class="form-label">Name</label>
        <input type="text" class="form-control" id="FormControlName" placeholder="My Name" value={this.state.person.name} disabled></input>
        </div>


        <div class="row">
            <div class="col">

        <div class="mb-3">
        <label for="FormControlID" class="form-label">ID</label>
        <input type="text" class="form-control" id="FormControlID" placeholder="123" value={this.state.person.member_id} disabled></input>
        </div>
        </div>

            <div class="col">

        <div class="mb-3">
        <label for="FormControlGender" class="form-label">Gender</label>
        <select class="form-select" id="FormControlGender" aria-label="Select Gender">
        <option selected>{this.state.person.gender}</option>
        <option value="1">{otherGender}</option>
        </select>
        </div>
        </div>
        </div>



        <div class="mb-3">
        <label for="FormControlRole" class="form-label">Role</label>
        <input type="text" class="form-control" id="FormControlRole" placeholder="i.e. Instructor" value={this.state.person.role} disabled></input>
        </div>
       

        <div class="mb-3">
        <label for="FormControlEmail" class="form-label">Email address</label>
        <input type="email" class="form-control" id="FormControlEmail" placeholder="name@guc.edu.eg" defaultValue={this.state.person.email}></input>
        </div>

        <div class="row">
            <div class="col">
        <div class="mb-3">
        <label for="FormControlOffice" class="form-label">Office Location</label>
        <input type="text" class="form-control" id="FormControlOffice" placeholder="C3.123" defaultValue={this.state.person.officeLocation}></input>
        </div>
        </div>

        <div class="col">

        <div class="mb-3">
        <label for="FormControlDayOff" class="form-label">Day off</label>
        <input type="text" class="form-control" id="FormControlDayOff" placeholder="Friday" defaultValue={this.state.person.dayoff}></input>
        </div>
        </div>
        </div>

        <div class="row">
            <div class="col">
        {department}
        </div>
        <div class="col">

        {faculty}
        </div>
        </div>

        <div className="right">
        <button type="button" class="btn btn-primary" onClick={() => this.handleSave()}>Save</button>
        </div>
        <br></br>
        <br></br>

        {Message}

        </form> 
        
        </div>
        </div>
        </div>

        )
    }

}

export default updateProfile;