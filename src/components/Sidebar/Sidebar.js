import React, {Component, Fragment} from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { NavLink} from 'react-router-dom';

import axios from 'axios';
 import './Sidebar.css'
 import 'react-pro-sidebar/dist/css/styles.css';

// const typeAll = ['HR','HOD','Course Instructor','Course Coordinator','Academic Member']


class Sidebar extends Component {
    
    state ={
        person : [],
        token : this.props.token,
        type : null
    }

    componentDidMount() {

        axios.get('https://advancedcomputerlab-backend.herokuapp.com/viewProfile', {
            headers: {
                'auth-token': this.state.token
            }
          })
          .then(res => {
            this.setState({ 
                person : res.data[0],
            });
            this.setState({ 
                type : this.state.person.role,
            });
          })
      }



    handleType =(e) =>{

        let commonStaffFeatures = (
            <Fragment>
            <MenuItem><NavLink activeClassName='resetpassword' to ="resetpassword" > Reset Password</NavLink></MenuItem>
            <SubMenu title="Sign" > 
                <MenuItem><NavLink activeClassName='signin' to ="signin" > Sign in</NavLink></MenuItem>             
                <MenuItem><NavLink activeClassName='signout' to ="signout" > Sign out</NavLink></MenuItem>
            </SubMenu>
            <SubMenu title="My Records" > 
            <MenuItem><NavLink activeClassName='viewmyattendance' to ="viewmyattendance" > My Attendance</NavLink></MenuItem>
            <MenuItem><NavLink activeClassName='viewmymissingdays' to ="viewmymissingdays" > My Missing Days</NavLink></MenuItem>             
            <MenuItem><NavLink activeClassName='viewmyhours' to ="viewmyhours" > My Missing Hours</NavLink></MenuItem>
            </SubMenu>
            </Fragment>
        )

        let commonACFeatures = (
            <Fragment>
                <MenuItem><NavLink activeClassName='viewSchedule' to ="viewSchedule" > View My Schedule</NavLink></MenuItem>
                <MenuItem><NavLink activeClassName='ChangeDayOff' to ="ChangeDayOff" > Change My Day Off</NavLink></MenuItem>

            <SubMenu title="Control Requests" > 
                <MenuItem><NavLink activeClassName='ViewRequests' to ="ViewRequests" > View Requests</NavLink></MenuItem>
                <MenuItem><NavLink activeClassName='sendReplacement' to ="sendReplacement" > Replacement Request</NavLink></MenuItem>             
                <MenuItem><NavLink activeClassName='sendSlotLinking' to ="sendSlotLinking" > Slot Linking Request</NavLink></MenuItem>
                <MenuItem><NavLink activeClassName='SubmitLeave' to ="SubmitLeave" > Leave Request</NavLink></MenuItem>             
            </SubMenu>
            </Fragment>
        )




        if(this.state.type =='HR'){
            return (
                <SidebarContent >{
        
                <Menu iconShape="round" >

                    <SubMenu defaultOpen='true' title="Dashboard" >
                    <MenuItem active='true'><NavLink activeClassName='Homepage' exact to ="/" > Home Page</NavLink></MenuItem>
                    {commonStaffFeatures}
                    </SubMenu>



                    <SubMenu defaultOpen='true' title="Services" >
                    {commonACFeatures}
                    </SubMenu>

        
                    
                    <SubMenu defaultOpen='true' title="Locations & Faculties" >
                        <SubMenu  title="Control Locations" >
                        <MenuItem><NavLink activeClassName='addlocation' to ="addlocation" > Add a location</NavLink></MenuItem>
                        <MenuItem><NavLink activeClassName='updatelocation' to ="updatelocation" > Update a location</NavLink></MenuItem>             
                        <MenuItem><NavLink activeClassName='deletelocation' to ="deletelocation" > Delete a location</NavLink></MenuItem>
                        </SubMenu>

                        <SubMenu  title="Control Faculties" >
                        <MenuItem><NavLink activeClassName='addfaculty' to ="addfaculty" > Add a Faculty</NavLink></MenuItem>
                        <MenuItem><NavLink activeClassName='updatefaculty' to ="updatefaculty" > Update a Faculty</NavLink></MenuItem>             
                        <MenuItem><NavLink activeClassName='deletefaculty' to ="deletefaculty" > Delete a Faculty</NavLink></MenuItem>
                        </SubMenu>

                        <SubMenu  title="Control Departments" >
                        <MenuItem><NavLink activeClassName='adddepartment' to ="adddepartment" > Add a Department</NavLink></MenuItem>
                        <MenuItem><NavLink activeClassName='updatedepartment' to ="updatedepartment" > Update a Department</NavLink></MenuItem>             
                        <MenuItem><NavLink activeClassName='deletedepartment' to ="deletedepartment" > Delete a Department</NavLink></MenuItem>
                        </SubMenu>

                        <SubMenu  title="Control Courses" >
                        <MenuItem><NavLink activeClassName='addcourse' to ="addcourse" > Add a Course</NavLink></MenuItem>
                        <MenuItem><NavLink activeClassName='updatecourse' to ="updatecourse" > Update a Course</NavLink></MenuItem>             
                        <MenuItem><NavLink activeClassName='deletecourse' to ="deletecourse" > Delete a Course</NavLink></MenuItem>
                        </SubMenu>
                    </SubMenu>

                    <SubMenu defaultOpen='true' title="Staff Members" >
                        <SubMenu  title="Control Staff" >
                        <MenuItem><NavLink activeClassName='addstaffmember' to ="addstaffmember" > Add Staff Member</NavLink></MenuItem>
                        <MenuItem><NavLink activeClassName='updatestaffmember' to ="updatestaffmember" > Update Staff Member</NavLink></MenuItem>             
                        <MenuItem><NavLink activeClassName='deletestaffmember' to ="deletestaffmember" > Delete Staff Member</NavLink></MenuItem>
                        <MenuItem><NavLink activeClassName='updatesalary' to ="updatesalary" > Update Salary</NavLink></MenuItem>
                        </SubMenu>

                        <SubMenu  title="Control Attendance" >
                        <MenuItem><NavLink activeClassName='addsignrecord' to ="addsignrecord" > Add a Sign Record</NavLink></MenuItem>
                        <MenuItem><NavLink activeClassName='viewstaffattendance' to ="viewstaffattendance" > View Attendance</NavLink></MenuItem> 
                        <MenuItem><NavLink activeClassName='viewstaffmissingdays' to ="viewstaffmissingdays" > View Missing Days</NavLink></MenuItem>            
                        <MenuItem><NavLink activeClassName='viewstaffmissinghours' to ="viewstaffmissinghours" > View Missing Hours</NavLink></MenuItem>
                        </SubMenu>
                    </SubMenu>

                </Menu>
                }</SidebarContent>
            )
        }
   

    else if(this.state.type =='HOD'){
        return (
            <SidebarContent >{
            
            <Menu iconShape="round" >

                <SubMenu defaultOpen='true' title="Dashboard" >
                 
                <MenuItem active='true'><NavLink activeClassName='Homepage' exact to ="/" > Home Page</NavLink></MenuItem>
                {commonStaffFeatures}
                </SubMenu>

                <SubMenu defaultOpen='true' title="Services" >
                    {commonACFeatures}
                    </SubMenu>
                
                        <SubMenu defaultOpen='true' title="Control Instructors" >
                        <MenuItem><NavLink activeClassName='assigninstructor' to ="assigninstructor" > Assign an Instructor</NavLink></MenuItem>
                        <MenuItem><NavLink activeClassName='updateinstructor' to ="updateinstructor" > Update an Instructor</NavLink></MenuItem>             
                        <MenuItem><NavLink activeClassName='deleteinstructor' to ="deleteinstructor" > Delete an Instructor</NavLink></MenuItem>
                        </SubMenu>

                        <SubMenu defaultOpen='true' title="Staff Info" >
                        <MenuItem><NavLink activeClassName='viewdepartmentstaff' to ="viewdepartmentstaff" > View Department Staff</NavLink></MenuItem>             
                        <MenuItem><NavLink activeClassName='viewcoursestaff' to ="viewcoursestaff" > View Course Staff</NavLink></MenuItem>             
                        <MenuItem><NavLink activeClassName='viewallstaffdayoffs' to ="viewallstaffdayoffs" > View All Staff Day Offs</NavLink></MenuItem>
                        <MenuItem><NavLink activeClassName='viewstaffdayoff' to ="viewstaffdayoff" > View a Staff Day Off</NavLink></MenuItem>
                        <MenuItem><NavLink activeClassName='viewstaffrequests' to ="viewstaffrequests" > View all Staff Requests</NavLink></MenuItem>
                        </SubMenu>

                        <SubMenu defaultOpen='true' title="Course Info" >
                        <MenuItem><NavLink activeClassName='viewcoursecoverage' to ="viewcoursecoverage" > View Course Coverage</NavLink></MenuItem>
                        <MenuItem><NavLink activeClassName='viewteachingassignments' to ="viewteachingassignments" > Teaching Assignments</NavLink></MenuItem>
                        </SubMenu>


            </Menu>
            }</SidebarContent>
        )
    }


    else if(this.state.type =='Course Instructor'){
        return (
            <SidebarContent >{
            
            <Menu iconShape="round" >

                        <SubMenu defaultOpen='true' title="Dashboard" >
                        <MenuItem active='true'><NavLink activeClassName='Homepage' exact to ="/" > Home Page</NavLink></MenuItem>
                        {commonStaffFeatures}
                        </SubMenu>

                        <SubMenu defaultOpen='true' title="Services" >
                    {commonACFeatures}
                    </SubMenu>

                        <SubMenu defaultOpen='true' title="Control Academic Members" >
                        <MenuItem><NavLink activeClassName='assignslots' to ="assignslots" > Assign Slots</NavLink></MenuItem>
                        <MenuItem><NavLink activeClassName='updateassignment' to ="updateassignment" > Update Assignment</NavLink></MenuItem>             
                        <MenuItem><NavLink activeClassName='deleteassignment' to ="deleteassignment" > Delete Assignment</NavLink></MenuItem>
                        <MenuItem><NavLink activeClassName='removeassignedmember' to ="removeassignedmember" > Remove Assigned Member</NavLink></MenuItem>
                        <MenuItem><NavLink activeClassName='assigncoursecoordinator' to ="assigncoursecoordinator" > Assign Course Coordinator</NavLink></MenuItem>

                        </SubMenu>

                        <SubMenu defaultOpen='true' title="Staff Info" >
                        <MenuItem><NavLink activeClassName='viewdepartmentstaff' to ="viewdepartmentstaff" > View Department Staff</NavLink></MenuItem>             
                        <MenuItem><NavLink activeClassName='viewcoursestaff' to ="viewcoursestaff" > View Course Staff</NavLink></MenuItem>             
                        </SubMenu>

                        <SubMenu defaultOpen='true' title="Course Info" >
                        <MenuItem><NavLink activeClassName='viewcoursecoverage' to ="viewcoursecoverage" > View Course Coverage</NavLink></MenuItem>
                        <MenuItem><NavLink activeClassName='viewslotsassignments' to ="viewslotsassignments" > Slots' Assignments</NavLink></MenuItem>
                    </SubMenu>

            </Menu>
            }</SidebarContent>
        )
    }


    else if(this.state.type =='Course Coordinator'){
        return (
            <SidebarContent >{
            
            <Menu iconShape="round" >

                <SubMenu defaultOpen='true' title="Dashboard" >
                 
                <MenuItem active='true'><NavLink activeClassName='Homepage' exact to ="/" > Home Page</NavLink></MenuItem>
                {commonStaffFeatures}
                </SubMenu>

                <SubMenu defaultOpen='true' title="Services" >
                    {commonACFeatures}
                    </SubMenu>
                
                    <SubMenu defaultOpen='true' title="Slot linking Requests" >
                        <MenuItem><NavLink activeClassName='controlrequests' to ="controlrequests" > Control Requests</NavLink></MenuItem>
                        </SubMenu>

                        <SubMenu defaultOpen='true' title="Control Course Slots" >
                        <MenuItem><NavLink activeClassName='addcourseslot' to ="addcourseslot" > Add Course Slot</NavLink></MenuItem>
                        <MenuItem><NavLink activeClassName='updatecourseslot' to ="updatecourseslot" > Update Course Slot</NavLink></MenuItem>
                        <MenuItem><NavLink activeClassName='deletecourseslot' to ="deletecourseslot" > Delete Course Slot</NavLink></MenuItem>
                    </SubMenu>

            </Menu>
            }</SidebarContent>
        )
    }

    else if(this.state.type ==null){
        return (
            <SidebarContent >{
            
            <Menu iconShape="round" >

                <SubMenu defaultOpen='true' title="Dashboard" >
                 
                    <MenuItem active='true'><NavLink activeClassName='Homepage' exact to ="/" > Home Page</NavLink></MenuItem>
                    {commonStaffFeatures}
                    </SubMenu>

                    <SubMenu defaultOpen='true' title="Services" >
                    {commonACFeatures}
                    </SubMenu>
                
            </Menu>
            }</SidebarContent>
        )
    }

}



    render(){
    return (
    <div >
    <aside className = 'Sidebar'>
        <ProSidebar toggled='true' >
        <br></br>

        <SidebarHeader className='tex'>
            {this.state.type!=null?(this.state.type):('Academic Member')}'s Home
            <br></br>
        </SidebarHeader>
     

        {this.handleType()}
        

        <SidebarFooter>
            ©2021 GUC Software Systems
        </SidebarFooter>

        </ProSidebar>
        </aside>
    </div>
    
    )
}
}

export default Sidebar;