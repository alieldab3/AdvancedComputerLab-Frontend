import React , { Component } from 'react';
import { BrowserRouter , NavLink, Route, Switch } from 'react-router-dom'
import './App.css';

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Homepage from './components/Homepage/homepage';
import Login from './components/login/login3';
import Profile from './components/Profile/Profile';
import updateProfile from './components/Profile/updateProfile';



///////////////////////// import 'HR Member' Components Here /////////////////////////
import addlocation from './components/HR/addlocation/addlocation';
import updatelocation from './components/HR/updatelocation/updatelocation';
import deletelocation from './components/HR/deletelocation/deletelocation';
import addfaculty from './components/HR/addfaculty/addfaculty';
import updatefaculty from './components/HR/updatefaculty/updatefaculty';
import deletefaculty from './components/HR/deletefaculty/deletefaculty';
import adddepartment from './components/HR/adddepartment/adddepartment';
import updatedepartment from './components/HR/updatedepartment/updatedepartment';
import deletedepartment from './components/HR/deletedepartment/deletedepartment';
import addcourse from './components/HR/addcourse/addcourse';
import updatecourse from './components/HR/updatecourse/updatecourse';
import deletecourse from './components/HR/deletecourse/deletecourse';
import addstaffmember from './components/HR/addstaffmember/addstaffmember';
import updatestaffmember from './components/HR/updatestaffmember/updatestaffmember';
import deletestaffmember from './components/HR/deletestaffmember/deletestaffmember';
import updatesalary from './components/HR/updatesalary/updatesalary';
import addsignrecord from './components/HR/addsignrecord/addsignrecord';
import viewstaffattendance from './components/HR/viewstaffattendance/viewstaffattendance';
import viewstaffmissingdays from './components/HR/viewstaffmissingdays/viewstaffmissingdays';
import viewstaffmissinghours from './components/HR/viewstaffmissinghours/viewstaffmissinghours';


///////////////////////// import 'Head of Department' Components Here /////////////////////////
import assigninstructor from './components/HOD/assigninstructor/assigninstructor';
import updateinstructor from './components/HOD/updateinstructor/updateinstructor';
import deleteinstructor from './components/HOD/deleteinstructor/deleteinstructor';
import viewallstaffdayoffs from './components/HOD/viewallstaffdayoffs/viewallstaffdayoffs';
import viewstaffdayoff from './components/HOD/viewstaffdayoff/viewstaffdayoff';
import viewstaffrequests from './components/HOD/viewstaffrequests/viewstaffrequests';
import viewteachingassignments from './components/HOD/viewteachingassignments/viewteachingassignments';


///////////////////////// import 'Course Instructor' Components Here /////////////////////////
import assignslots from './components/Course Instructor/assignslots/assignslots';
import updateassignment from './components/Course Instructor/updateassignment/updateassignment';
import deleteassignment from './components/Course Instructor/deleteassignment/deleteassignment';
import removeassignedmember from './components/Course Instructor/removeassignedmember/removeassignedmember';
import assigncoursecoordinator from './components/Course Instructor/assigncoursecoordinator/assigncoursecoordinator';
import viewslotsassignments from './components/Course Instructor/viewslotsassignments/viewslotsassignments';


///////////////////////// import 'Course Coordinator' Components Here /////////////////////////
import controlrequests from './components/Course Coordinator/controlrequests/controlrequests';
import addcourseslot from './components/Course Coordinator/addcourseslot/addcourseslot';
import updatecourseslot from './components/Course Coordinator/updatecourseslot/updatecourseslot';
import deletecourseslot from './components/Course Coordinator/deletecourseslot/deletecourseslot';


///////////////////////// import Common Components Here /////////////////////////

//'Head of Department' & 'Course Instructor'//
import viewdepartmentstaff from './components/Common Features/viewdepartmentstaff/viewdepartmentstaff';
import viewcoursestaff from './components/Common Features/viewcoursestaff/viewcoursestaff';
import viewcoursecoverage from './components/Common Features/viewcoursecoverage/viewcoursecoverage';

//All Staff Components//
import signin from './components/Common Features/signin/signin';
import signout from './components/Common Features/signout/signout';
import resetpassword from './components/Common Features/resetpassword/resetpassword';
import viewmyattendance from './components/Common Features/viewmyattendance/viewmyattendance';
import viewmymissingdays from './components/Common Features/viewmymissingdays/viewmymissingdays';
import viewmyhours from './components/Common Features/viewmyhours/viewmyhours';

//All Academic Members Components//




class App extends Component {

    state={
      loggedIn : true
  }

  handleLogIn = (e) =>{
      this.setState({
      loggedIn : true
      })
  }

  isLogged = (e) =>{
    if ( this.state.loggedIn == false) {
        return <Login/>

    } else {
        return (
        <BrowserRouter>
          <div className='App'>
            <Header />

              <div className='content'> 

                <Sidebar />
                  <Switch>

                      {/* <Route exact path='/login' > {this.setState({loggedIn:true})} </Route>
                      <Route exact path='/logout' > {this.setState({loggedIn:false})} </Route> */}
                      <Route exact path='/' component={Homepage} />
                      <Route exact path='/profile' component={Profile} />
                      <Route exact path='/updateprofile' component={updateProfile} />



                      {/* ///////////////////////// insert 'HR Member' Components Routes Here ///////////////////////// */}
                      <Route exact path='/addlocation' component={addlocation} />
                      <Route exact path='/updatelocation' component={updatelocation} />
                      <Route exact path='/deletelocation' component={deletelocation} />
                      <Route exact path='/addfaculty' component={addfaculty} />
                      <Route exact path='/updatefaculty' component={updatefaculty} />
                      <Route exact path='/deletefaculty' component={deletefaculty} />
                      <Route exact path='/adddepartment' component={adddepartment} />
                      <Route exact path='/updatedepartment' component={updatedepartment} />
                      <Route exact path='/deletedepartment' component={deletedepartment} />
                      <Route exact path='/addcourse' component={addcourse} />
                      <Route exact path='/updatecourse' component={updatecourse} />
                      <Route exact path='/deletecourse' component={deletecourse} />
                      <Route exact path='/addstaffmember' component={addstaffmember} />
                      <Route exact path='/updatestaffmember' component={updatestaffmember} />
                      <Route exact path='/deletestaffmember' component={deletestaffmember} />
                      <Route exact path='/updatesalary' component={updatesalary} />
                      <Route exact path='/addsignrecord' component={addsignrecord} />
                      <Route exact path='/viewstaffattendance' component={viewstaffattendance} />
                      <Route exact path='/viewstaffmissingdays' component={viewstaffmissingdays} />
                      <Route exact path='/viewstaffmissinghours' component={viewstaffmissinghours} />


                      {/* ///////////////////////// insert 'Head of Department' Components Routes Here ///////////////////////// */}
                      <Route exact path='/assigninstructor' component={assigninstructor} />
                      <Route exact path='/updateinstructor' component={updateinstructor} />
                      <Route exact path='/deleteinstructor' component={deleteinstructor} />
                      <Route exact path='/viewallstaffdayoffs' component={viewallstaffdayoffs} />
                      <Route exact path='/viewstaffdayoff' component={viewstaffdayoff} />
                      <Route exact path='/viewstaffrequests' component={viewstaffrequests} />
                      <Route exact path='/viewteachingassignments' component={viewteachingassignments} />


                      {/* ///////////////////////// insert 'Course Instructor' Components Routes Here ///////////////////////// */}
                      <Route exact path='/assignslots' component={assignslots} />
                      <Route exact path='/updateassignment' component={updateassignment} />
                      <Route exact path='/deleteassignment' component={deleteassignment} />
                      <Route exact path='/removeassignedmember' component={removeassignedmember} />
                      <Route exact path='/assigncoursecoordinator' component={assigncoursecoordinator} />
                      <Route exact path='/viewslotsassignments' component={viewslotsassignments} />


                      {/* ///////////////////////// insert 'Course Coordinator' Components Routes Here ///////////////////////// */}
                      <Route exact path='/controlrequests' component={controlrequests} />
                      <Route exact path='/addcourseslot' component={addcourseslot} />
                      <Route exact path='/updatecourseslot' component={updatecourseslot} />
                      <Route exact path='/deletecourseslot' component={deletecourseslot} />


                      {/* ///////////////////////// insert Common Features Components Routes Here ///////////////////////// */}
                          {/* 'Head of Department' & 'Course Instructor' */}
                          <Route exact path='/viewdepartmentstaff' component={viewdepartmentstaff} />
                          <Route exact path='/viewcoursestaff' component={viewcoursestaff} />
                          <Route exact path='/viewcoursecoverage' component={viewcoursecoverage} />
                          {/* All Staff Components */}
                          <Route exact path='/signin' component={signin} />
                          <Route exact path='/signout' component={signout} />
                          <Route exact path='/resetpassword' component={resetpassword} />
                          <Route exact path='/viewmyattendance' component={viewmyattendance} />
                          <Route exact path='/viewmymissingdays' component={viewmymissingdays} />
                          <Route exact path='/viewmyhours' component={viewmyhours} />
                          {/* All Academic Members Components */}

                          


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