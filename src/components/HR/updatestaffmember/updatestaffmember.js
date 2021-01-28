import React , { Component } from 'react';
import axios from 'axios'
import './updatestaffmember.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { message} from 'antd';



const success = () => {
    
    message.success('staff member updated successfully in the system');
  };

const warning = () => {
    
    message.warning('Plz fill all the required information');
  };
  
  const error1 = () => {
    message.error('Cannot update member either some data donot exist or name is duplicate');
  };
    
  
class updatestaffmember extends Component{
  
  state ={
    token : this.props.token
  }
  
   
    


    callAPI() {
      let c=document.getElementById("uniqueID").value;
      let e=document.getElementById("uniqueID1").value;
      let f=document.getElementById("uniqueID2").value;
      let g=document.getElementById("uniqueID3").value;
      let h=document.getElementById("uniqueID4").value;
      console.log(c+" "+e+" "+f+" "+g+" "+h)
      if(c&&e&&f&&g&&h){
    axios.get('https://advancedcomputerlab-backend.herokuapp.com/updateMem', {
      headers: {'auth-token': this.state.token},
           
        params:{
      
    id:f,email:c,
        officeLocation:e,role:h,dayoff:g
        }
    },{withCredentials:true})
          .then(function (response) {
           success()
           console.log(response);
          
        })
       
          .catch(function (error){
        error1()
            console.log("no")
      
            console.log(error);
          
      //      message.error(error.response.data);
          });
   
        }
        else{
            warning();
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

        <div class="login-box">
  <h2>update staff member </h2>
  <form>
  <div class="user-box">
      <input type= "text" name="" required=""id="uniqueID2"placeholder="plz enter  id number"  />
      <label>ID</label>
    </div>
 <div class="user-box">
      <input type= "text" name="" required=""id="uniqueID"placeholder="new email"  />
      <label>Email</label>
    </div>
    
    <div class="user-box">
      <input type="text" name="" required=""id="uniqueID1" placeholder="new officelocation" />
      <label>officeLocation</label>
    </div>

    <div className="user-box">
    <select className="classic" id="uniqueID3">
  <option>Saturday</option>
  <option>Sunday</option>
  <option>Monday</option>
  <option>Tuesday</option>
  <option>Wednesday</option>
  <option>Thursday</option>
 
</select>
</div>
 
    
     <div className="user-box">
     <select className="classic" id="uniqueID4">
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
      <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.handleClick} >Update staff member data</button>
     
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


export default updatestaffmember;
