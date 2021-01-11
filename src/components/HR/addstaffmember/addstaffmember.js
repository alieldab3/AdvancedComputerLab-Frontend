import React , { Component } from 'react';
import axios from 'axios'
import './addstaffmember.css';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { message, Button ,space} from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';



const success = () => {
    
  message.success('staff member added successfully to the system');
};

const warning = () => {
    
    message.warning('Plz fill all the required information');
  };
  

const error1 = () => {
  message.error('Cannot create member either some data donot exist or name is duplicate');
};
  
class addstaffmember extends Component{
  
   
    


    callAPI() {
      let a=document.getElementById("uniqueID").value;
      let b=document.getElementById("uniqueID1").value;
      let c=document.getElementById("uniqueID2").value;
      let d=document.getElementById("uniqueID3").value;
      let e=document.getElementById("uniqueID4").value;
      let f=document.getElementById("uniqueID5").value;
      let g=document.getElementById("uniqueID6").value;
      let h=document.getElementById("uniqueID7").value;
      
      if(a&&b&&c&&d&&e&&f&&g&&h){
    axios.post('http://localhost:5000/registerMem', {
         gender:f,name:a,email:h,salary:b,
        officeLocation:{name:c},role:g,dayoff:e,department:d
    
    },{withCredentials:true})
          .then(function (response) {
           {success()}
           console.log(response);
          
        })
       
          .catch(function (error){
        {error1()}
            console.log("no")
      
            console.log(error);
          
      //      message.error(error.response.data);
          });
   
        }
        else{
            {warning()};
        }  
    }

    componentDidMount() {
    
    }
    
    handleClick= (e) => {
e.preventDefault();
     this.callAPI(e);
   
    }
    

render() {
    return(
      <div className="big">

        <div className="login-box">
  <h2>Add StaffMember </h2>
  <form>
  <div class="user-box">
      <input type= "text" name="" required=""id="uniqueID7"placeholder="Must be valid email"  />
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type= "text" name="" required=""id="uniqueID"placeholder="user name"  />
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required=""id="uniqueID1" placeholder="salary" />
      <label>salary</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required=""id="uniqueID2" placeholder="office location" />
      <label>officeLocation</label>
    </div>
    <div className="user-box">
 
      <input type="text" className="" required=""id="uniqueID3" placeholder="department" />
      <label>department</label>
    </div>
    <div className="user-box">
    <select className="classic" id="uniqueID4">
  <option>Saturday</option>
  <option>Sunday</option>
  <option>Monday</option>
  <option>Tuesday</option>
  <option>Wednesday</option>
  <option>Thursday</option>
 
</select>
</div>
 
    <div className="user-box">
    <select className="classic" id="uniqueID5">
  <option>Male</option>
  <option>Female</option>
 
</select>
</div>
    
     <div className="user-box">
     <select className="classic" id="uniqueID6">
  <option>HR</option>
  <option>HOD</option>
  <option>Staffmember</option>
  
  </select>
  </div>
 
 
    
  
  
  <a href="#">
  
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.handleClick} >Add new Staff Member to the system</button>
   
    </a>
 
    
    
  

  </form>

</div>
</div>
      
    )
}


}
// class viewschedule extends Component {
//   render () {
//     return (
//       <BrowserRouter>
//       <Sidebar />
//       {/* <Route exact path='/' component={Index} />
//       <Route path='/contact' component={Contact} /> */}
//     </BrowserRouter>

//    );
//   }
// }


export default addstaffmember;
