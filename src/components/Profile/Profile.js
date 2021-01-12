import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import { Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import './Profile.css';
import profileImage from "./hd.jpg";


class Profile extends Component {



    state ={
        person : [],
        officeLocation : null
        // name : 'Ali El Dabaa',
        // member_id : '123',
        // gender : 'Male',
        // email : 'alihaha@gmail.com',
        // officeLocation : 'C3.215',
        // role: 'CEO & Founder, HR Baba',
        // dayoff : 'Friday',
        // faculty : null,
        // department : null
        // courses
        // schedule
    }

    componentDidMount() {
        axios.get('http://localhost:5000/viewProfile')
          .then(res => {
            const person = res.data[0];
            const loc = res.data[1];

            console.log(person)
            console.log(loc)

            this.setState({ 
                person : person,
                officeLocation : loc
            });
          })
      }


    render(){
        let department;
        let faculty;

        if (this.state.person.department !=null) {
            department = <p>Department : {this.state.person.department}</p>
        }

        if (this.state.person.faculty !=null) {
            faculty = <p>Faculty : {this.state.person.faculty}</p>
        }

        return(
        <div className="mainP">
            
            <div className="container">
                <div className="cardleft" >
                <img src={profileImage} alt={this.state.person.name} width='250px' height='250px'  ></img>
                </div>

                <div className = 'cardwide'>
                <h1>{this.state.person.name}</h1>
                <p class="title">{this.state.person.role}</p>
                <p>Gender : {this.state.person.gender}</p>
                <p>Email : {this.state.person.email}</p>
                <p>Office Location : {this.state.officeLocation}</p>
                <p>Day Off : {this.state.person.dayoff}</p>
                
                {department}
                {faculty}

                
                {/* <a href={ 'https://www.facebook.com/' + this.state.person.name.replace(/ /g,'') }><i class="fa fa-facebook"></i>                              </a>
                <a href={ 'https://twitter.com/' + this.state.person.name.replace(/ /g,'') }><i class="fa fa-twitter"></i>                              </a>
                <a href={ 'https://www.linkedin.com/in/' + this.state.person.name.replace(/ /g,'') }><i class="fa fa-linkedin"></i>                              </a> */}
                <br></br>
                <br></br>

                <a href={ 'mailto:' + this.state.person.email }>
                <button type="button" class="btn btn-outline-dark">Send Email</button>
                </a>
                <br></br>
                <br></br>

                </div>
                


           

                

            </div>

            <div className='Under' >

            <NavLink activeClassName='UpdateProfile' to ='updateprofile'>
            <button type="button" class="btn btn-primary">Update Profile</button>
            </NavLink>

            </div>
            
            </div>
        )
    }
}


export default Profile;
