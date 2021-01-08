import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './Profile.css';





class updateProfile extends Component {
    state ={
        name : 'Ali El Dabaa',
        member_id : '123',
        gender : 'Male',
        email : 'alihaha@gmail.com',
        officeLocation : 'C3.215',
        role: 'CEO & Founder, HR Baba',
        dayoff : 'Friday',
        faculty : null,
        department : null
    }

    



    render(){
        let otherGender;
        this.state.gender=='Male' ? (otherGender = 'Female') : (otherGender = 'Male') ;

        let department;
        let faculty;

        if (this.state.department !=null) {
            faculty = (
                <div class="mb-3">
                <label for="FormControlFaculty" class="form-label">Faculty</label>
                <input type="text" class="form-control" id="FormControlFaculty" placeholder="MET" defaultValue={this.state.faculty} disabled></input>
                </div>
            )
        }

        if (this.state.faculty !=null) {
             department= (
                <div class="mb-3">
                <label for="FormControlDepartment" class="form-label">Department</label>
                <input type="text" class="form-control" id="FormControlDepartment" placeholder="Computer Science & Engineering" defaultValue={this.state.department} disabled></input>
                </div>
            )
        }
           
        
        return(
     
    <div className="mainP">
    <div className="container">


    <div className = 'cardupdate'>

        <form class="form-floating">
            {/* class="form-control is-invalid" */}



        <div class="mb-3">
        <label for="FormControlName" class="form-label">Name</label>
        <input type="text" class="form-control" id="FormControlName" placeholder="My Name" value={this.state.name} disabled></input>
        </div>


        <div class="row">
            <div class="col">

        <div class="mb-3">
        <label for="FormControlID" class="form-label">ID</label>
        <input type="text" class="form-control" id="FormControlID" placeholder="123" value={this.state.member_id} disabled></input>
        </div>
        </div>

            <div class="col">

        <div class="mb-3">
        <label for="FormControlGender" class="form-label">Gender</label>
        <select class="form-select" id="FormControlGender" aria-label="Select Gender">
        <option selected>{this.state.gender}</option>
        <option value="1">{otherGender}</option>
        </select>
        </div>
        </div>
        </div>



        <div class="mb-3">
        <label for="FormControlRole" class="form-label">Role</label>
        <input type="text" class="form-control" id="FormControlRole" placeholder="i.e. Instructor" defaultValue={this.state.role}></input>
        </div>
       

        <div class="mb-3">
        <label for="FormControlEmail" class="form-label">Email address</label>
        <input type="email" class="form-control" id="FormControlEmail" placeholder="name@guc.edu.eg" defaultValue={this.state.email}></input>
        </div>

        <div class="row">
            <div class="col">
        <div class="mb-3">
        <label for="FormControlOffice" class="form-label">Office Location</label>
        <input type="text" class="form-control" id="FormControlOffice" placeholder="C3.123" defaultValue={this.state.officeLocation}></input>
        </div>
        </div>

        <div class="col">

        <div class="mb-3">
        <label for="FormControlDayOff" class="form-label">Day Off</label>
        <input type="text" class="form-control" id="FormControlDayOff" placeholder="Friday" defaultValue={this.state.dayoff}></input>
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
        <button type="button" class="btn btn-primary">Save</button>
        </div>

        </form> 
        
        </div>
        </div>
        </div>

        
        
     

      


        )
    }

}

export default updateProfile;
