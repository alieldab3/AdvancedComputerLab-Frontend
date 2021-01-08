import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './Profile.css';
import profileImage from "./hd.jpg";


class Profile extends Component {
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
        // courses
        // schedule
    }


    render(){
        let department;
        let faculty;

        if (this.state.department !=null) {
            department = <p>Department : {this.state.department}</p>
        }

        if (this.state.faculty !=null) {
            faculty = <p>Faculty : {this.state.faculty}</p>
        }

        return(
        <div className="mainP">
            
            <div className="container">
                <div className="cardleft" >
                <img src={profileImage} alt={this.state.name} width='250px' height='250px'  ></img>
                </div>

                <div className = 'cardwide'>
                <h1>{this.state.name}</h1>
                <p class="title">{this.state.role}</p>
                <p>Gender : {this.state.gender}</p>
                <p>Email : {this.state.email}</p>
                <p>Office Location : {this.state.officeLocation}</p>
                <p>Day Off : {this.state.dayoff}</p>
                
                {department}
                {faculty}

                
                <a href={ 'https://www.facebook.com/' + this.state.name.replace(/ /g,'') }><i class="fa fa-facebook"></i>                              </a>
                <a href={ 'https://twitter.com/' + this.state.name.replace(/ /g,'') }><i class="fa fa-twitter"></i>                              </a>
                <a href={ 'https://www.linkedin.com/in/' + this.state.name.replace(/ /g,'') }><i class="fa fa-linkedin"></i>                              </a>
                <br></br>
                <br></br>

                <button type="button" class="btn btn-outline-dark">Send Email</button>

                <br></br>
                <br></br>

                </div>
                


           

                

            </div>

            <div className='Under' >

            <a href="/updateprofile" >
            <button type="button" class="btn btn-primary">Update Profile</button>
            </a>
            </div>
            
            </div>
        )
    }
}


export default Profile;
