import React , { Component } from 'react';
import { BrowserRouter , NavLink, Route, Switch } from 'react-router-dom'
import './App.css';

import axios from 'axios';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Image from './components/Header/header2.jpg';


import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Homepage from './components/Homepage/homepage';
import Login from './components/login/login3';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/updateProfile';



///////////////////////// import 'HR Member' Components Here /////////////////////////
import Addlocation from './components/HR/addlocation/addlocation';
import Updatelocation from './components/HR/updatelocation/updatelocation';
import Deletelocation from './components/HR/deletelocation/deletelocation';
import Addfaculty from './components/HR/addfaculty/addfaculty';
import Updatefaculty from './components/HR/updatefaculty/updatefaculty';
import Deletefaculty from './components/HR/deletefaculty/deletefaculty';
import Adddepartment from './components/HR/adddepartment/adddepartment';
import Updatedepartment from './components/HR/updatedepartment/updatedepartment';
import Deletedepartment from './components/HR/deletedepartment/deletedepartment';
import Addcourse from './components/HR/addcourse/addcourse';
import Updatecourse from './components/HR/updatecourse/updatecourse';
import Deletecourse from './components/HR/deletecourse/deletecourse';
import Addstaffmember from './components/HR/addstaffmember/addstaffmember';
import Updatestaffmember from './components/HR/updatestaffmember/updatestaffmember';
import Deletestaffmember from './components/HR/deletestaffmember/deletestaffmember';
import Updatesalary from './components/HR/updatesalary/updatesalary';
import Addsignrecord from './components/HR/addsignrecord/addsignrecord';
import Viewstaffattendance from './components/HR/viewstaffattendance/viewstaffattendance';
import Viewstaffmissingdays from './components/HR/viewstaffmissingdays/viewstaffmissingdays';
import Viewstaffmissinghours from './components/HR/viewstaffmissinghours/viewstaffmissinghours';


///////////////////////// import 'Head of Department' Components Here /////////////////////////
import Assigninstructor from './components/HOD/assigninstructor/assigninstructor';
import Updateinstructor from './components/HOD/updateinstructor/updateinstructor';
import Deleteinstructor from './components/HOD/deleteinstructor/deleteinstructor';
import Viewallstaffdayoffs from './components/HOD/viewallstaffdayoffs/viewallstaffdayoffs';
import Viewstaffdayoff from './components/HOD/viewstaffdayoff/viewstaffdayoff';
import Viewstaffrequests from './components/HOD/viewstaffrequests/viewstaffrequests';
import Viewteachingassignments from './components/HOD/viewteachingassignments/viewteachingassignments';


///////////////////////// import 'Course Instructor' Components Here /////////////////////////
import Assignslots from './components/Course Instructor/assignslots/assignslots';
import Updateassignment from './components/Course Instructor/updateassignment/updateassignment';
import Deleteassignment from './components/Course Instructor/deleteassignment/deleteassignment';
import Removeassignedmember from './components/Course Instructor/removeassignedmember/removeassignedmember';
import Assigncoursecoordinator from './components/Course Instructor/assigncoursecoordinator/assigncoursecoordinator';
import Viewslotsassignments from './components/Course Instructor/viewslotsassignments/viewslotsassignments';


///////////////////////// import 'Course Coordinator' Components Here /////////////////////////
import Controlrequests from './components/Course Coordinator/controlrequests/controlrequests';
import Addcourseslot from './components/Course Coordinator/addcourseslot/addcourseslot';
import Updatecourseslot from './components/Course Coordinator/updatecourseslot/updatecourseslot';
import Deletecourseslot from './components/Course Coordinator/deletecourseslot/deletecourseslot';


///////////////////////// import Common Components Here /////////////////////////

//'Head of Department' & 'Course Instructor'//
import Viewdepartmentstaff from './components/Common Features/viewdepartmentstaff/viewdepartmentstaff';
import Viewcoursestaff from './components/Common Features/viewcoursestaff/viewcoursestaff';
import Viewcoursecoverage from './components/Common Features/viewcoursecoverage/viewcoursecoverage';

//All Staff Components//
import Signin from './components/Common Features/signin/signin';
import Signout from './components/Common Features/signout/signout';
import Resetpassword from './components/Common Features/resetpassword/resetpassword';
import Viewmyattendance from './components/Common Features/viewmyattendance/viewmyattendance';
import Viewmymissingdays from './components/Common Features/viewmymissingdays/viewmymissingdays';
import Viewmyhours from './components/Common Features/viewmyhours/viewmyhours';

//All Academic Members Components//
import ViewSchedule from './components/Common Features/viewSchedule/viewSchedule';
import SendReplacement from './components/Common Features/sendReplacement/sendReplacement';
import SendSlotLinking from './components/Common Features/sendSlotLinking/sendSlotLinking';
import ChangeDayOff from './components/Common Features/ChangeDayOff/ChangeDayOff';
import SubmitLeave from './components/Common Features/SubmitLeave/SubmitLeave';
import ViewRequests from './components/Common Features/ViewRequests/ViewRequests';


class App extends Component {

    state={
      isLogged : false,
      token : null,
      user:null,
      loginFailed : null,
  }


  handleloginSub(){
      let loginemail = document.getElementById("loginemail").value;
      let loginPassword = document.getElementById("loginPassword").value;

      console.log(loginemail+" "+loginPassword)
      axios.post('https://advancedcomputerlab-backend.herokuapp.com/login',
      {
          email : loginemail,
          password : loginPassword,
      },{withCredentials:true})
      .then(res=>{
        this.setState({isLogged : true,
            token : res.data.token,
            user : res.data.user})

        // const token = res.data.token;
        // const user = res.data.user;


        // this.setState({ 
        //   token : token,
        //   user : user
        // });

      })
      .catch((error)=>{
          this.setState({
            isLogged : false,
            loginFailed:true
    })
          console.log(error);
      });

      console.log("Logging In ....")
      console.log(this.state.token)
  }


  isLogged = (e) =>{
    if ( this.state.isLogged == false) {
        let Message;

        if (this.state.loginFailed == true) {
           Message =( <div class="alert alert-primary" role="alert">
           This was an error! Please, Try again Later.
           </div>)
       }
        return(


          <div>

            <div className="container">
                <div class="row">

                    <div class="col">
                        <div className = 'card8'>
                            <img src={Image} alt='GUC' width='100%' ></img>
                        </div>
                    </div>

                    <div class="col">
                        <div className = 'card4'>

                            <div>
                                <br></br>
                                <br></br>
                                <br></br>

                                <LockOutlinedIcon />
                                <br></br>

                                <h4>Log In</h4>
                                <br></br>
                            </div>

                            <div class='widthed'>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="loginemail" placeholder="name@guc.edu.eg"></input>
                                    <label for="loginemail">Email address</label>
                                </div>

                                <div class="form-floating">
                                    <input type="password" class="form-control" id="loginPassword" placeholder="Password"></input>
                                    <label for="loginPassword">Password</label>
                                </div>
                            </div>

                            <br></br>

                            <div class="form-check">
                                <div className='left'>
                                    <input class="form-check-input" type="checkbox" value="" id="RememberMeCheck"></input>
                                    <label class="form-check-label" for="RememberMeCheck">Remember Me</label>
                                </div>
                            </div>

                            <br></br>

                            <div >
                                <button type="submit" class="btn btn-primary" onClick={() => this.handleloginSub()} >Log In</button>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>

                            <div>
                                <p>{'©'}{new Date().getFullYear()}{' GUC Software Systems'}</p>
                                {Message}
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div></div>
                    </div>

                </div>
            </div>

            </div>

        )

    } else {
        return (
          
        <BrowserRouter>
          <div className='App'>
            
            <Header />

              <div className='content'> 

                <Sidebar token={this.state.token}/>
                  <Switch>

                      {/* <Route exact path='/logout' /> {this.setState({isLogged:false,token:null,user:null}) } </Route> */}
                      {/* <Route exact path='/login' component={Login} /> */}

                      <Route exact path='/' component={Homepage} />
                      <Route exact path='/profile' render={(props) => (<Profile {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/updateprofile' render={(props) => (<UpdateProfile {...props} token={this.state.token} user={this.state.user} />)} />


                      {/* ///////////////////////// insert 'HR Member' Components Routes Here ///////////////////////// */}
                      <Route exact path='/addlocation' render={(props) => (<Addlocation {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/updatelocation' render={(props) => (<Updatelocation {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/deletelocation' render={(props) => (<Deletelocation {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/addfaculty' render={(props) => (<Addfaculty {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/updatefaculty' render={(props) => (<Updatefaculty {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/deletefaculty' render={(props) => (<Deletefaculty {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/adddepartment' render={(props) => (<Adddepartment {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/updatedepartment' render={(props) => (<Updatedepartment {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/deletedepartment' render={(props) => (<Deletedepartment {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/addcourse' render={(props) => (<Addcourse {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/updatecourse' render={(props) => (<Updatecourse {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/deletecourse' render={(props) => (<Deletecourse {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/addstaffmember' render={(props) => (<Addstaffmember {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/updatestaffmember' render={(props) => (<Updatestaffmember {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/deletestaffmember' render={(props) => (<Deletestaffmember {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/updatesalary' render={(props) => (<Updatesalary {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/addsignrecord' render={(props) => (<Addsignrecord {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/viewstaffattendance' render={(props) => (<Viewstaffattendance {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/viewstaffmissingdays' render={(props) => (<Viewstaffmissingdays {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/viewstaffmissinghours' render={(props) => (<Viewstaffmissinghours {...props} token={this.state.token} user={this.state.user} />)} />


                      {/* ///////////////////////// insert 'Head of Department' Components Routes Here ///////////////////////// */}
                      <Route exact path='/assigninstructor' render={(props) => (<Assigninstructor {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/updateinstructor' render={(props) => (<Updateinstructor {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/deleteinstructor' render={(props) => (<Deleteinstructor {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/viewallstaffdayoffs' render={(props) => (<Viewallstaffdayoffs {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/viewstaffdayoff' render={(props) => (<Viewstaffdayoff {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/viewstaffrequests' render={(props) => (<Viewstaffrequests {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/viewteachingassignments' render={(props) => (<Viewteachingassignments {...props} token={this.state.token} user={this.state.user} />)} />


                      {/* ///////////////////////// insert 'Course Instructor' Components Routes Here ///////////////////////// */}
                      <Route exact path='/assignslots' render={(props) => (<Assignslots {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/updateassignment' render={(props) => (<Updateassignment {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/deleteassignment' render={(props) => (<Deleteassignment {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/removeassignedmember' render={(props) => (<Removeassignedmember {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/assigncoursecoordinator' render={(props) => (<Assigncoursecoordinator {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/viewslotsassignments' render={(props) => (<Viewslotsassignments {...props} token={this.state.token} user={this.state.user} />)} />


                      {/* ///////////////////////// insert 'Course Coordinator' Components Routes Here ///////////////////////// */}
                      <Route exact path='/controlrequests' render={(props) => (<Controlrequests {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/addcourseslot' render={(props) => (<Addcourseslot {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/updatecourseslot' render={(props) => (<Updatecourseslot {...props} token={this.state.token} user={this.state.user} />)} />
                      <Route exact path='/deletecourseslot' render={(props) => (<Deletecourseslot {...props} token={this.state.token} user={this.state.user} />)} />


                      {/* ///////////////////////// insert Common Features Components Routes Here ///////////////////////// */}
                          {/* 'Head of Department' & 'Course Instructor' */}
                          <Route exact path='/viewdepartmentstaff' render={(props) => (<Viewdepartmentstaff {...props} token={this.state.token} user={this.state.user} />)} />
                          <Route exact path='/viewcoursestaff' render={(props) => (<Viewcoursestaff {...props} token={this.state.token} user={this.state.user} />)} />
                          <Route exact path='/viewcoursecoverage' render={(props) => (<Viewcoursecoverage {...props} token={this.state.token} user={this.state.user} />)} />
                          {/* All Staff Components */}
                          <Route exact path='/signin' render={(props) => (<Signin {...props} token={this.state.token} user={this.state.user} />)} />
                          <Route exact path='/signout' render={(props) => (<Signout {...props} token={this.state.token} user={this.state.user} />)} />
                          <Route exact path='/resetpassword' render={(props) => (<Resetpassword {...props} token={this.state.token} user={this.state.user} />)} />
                          <Route exact path='/viewmyattendance' render={(props) => (<Viewmyattendance {...props} token={this.state.token} user={this.state.user} />)} />
                          <Route exact path='/viewmymissingdays' render={(props) => (<Viewmymissingdays {...props} token={this.state.token} user={this.state.user} />)} />
                          <Route exact path='/viewmyhours' render={(props) => (<Viewmyhours {...props} token={this.state.token} user={this.state.user} />)} />
                          {/* All Academic Members Components */}
                          <Route exact path='/viewSchedule' render={(props) => (<ViewSchedule {...props} token={this.state.token} user={this.state.user} />)} />
                          <Route exact path='/sendReplacement' render={(props) => (<SendReplacement {...props} token={this.state.token} user={this.state.user} />)} />
                          <Route exact path='/sendSlotLinking' render={(props) => (<SendSlotLinking {...props} token={this.state.token} user={this.state.user} />)} />
                          <Route exact path='/ChangeDayOff' render={(props) => (<ChangeDayOff {...props} token={this.state.token} user={this.state.user} />)} />
                          <Route exact path='/SubmitLeave' render={(props) => (<SubmitLeave {...props} token={this.state.token} user={this.state.user} />)} />
                          <Route exact path='/ViewRequests' render={(props) => (<ViewRequests {...props} token={this.state.token} user={this.state.user} />)} />
                          
                  </Switch>
              </div>

          </div>
        </BrowserRouter>
        )

    }
  }


  render () {
    return (
      this.isLogged()
   );
  }
}


export default App;