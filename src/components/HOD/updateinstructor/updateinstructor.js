
import React , { Component } from 'react';
import axios from 'axios'
import './updateinstructor.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { message} from 'antd';


const success = () => {
    
  message.success('Instructor updated successfully successfully');
};

const error1 = () => {
  message.error('old Instructor is not  assigned to this course' );
};
const warning = () => {
    
  message.warning('Please fill all the required information');
};

  
class updateinstructor extends Component{
  
   
   
  state ={
    token : this.props.token
  }
  
   
    


    callAPI() {
      let a=document.getElementById("uniqueID").value;
      let b=document.getElementById("uniqueID1").value;
   
      if(a&&b){
success();
      }
   else{
warning();
/*    axios.put('http://localhost:5000/addInstructor/ac-30/:CSEN-704', {
         
    id:a,
          course:b
           
          },{
            headers: {'auth-token': this.state.token}
            }
            ,{withCredentials:true})
          .then(function (response) {
           success()
           console.log(response);
          
        })
       
          .catch(function (error){
        error1()
            console.log("no")
      
            console.log(error);
          
      //      message.error(error.response.data);
          });*/
   }  
    }

    componentDidMount() {
    
    }
    
    handleClick= () => {

     this.callAPI();
   
    }
render() {
    return(

        <div className="mainp">
        <div className="container">


        <div className = 'cardupdate'>

        <form class="form-floating">
            {/* class="form-control is-invalid" */}
            <br></br>

        <h3> update the instructor of a course</h3>

        
        <div class="mb-3">
        </div>
        <br></br>
        
        <ul>
        </ul>

         <div >
         <label for="NewPassword" class="form-label" >Old Instructor ID </label>
            <div class="input-group mb-3">
            <input typeclass="form-control" id="uniqueID" placeholder="id" required="required"></input>
            </div>
         </div>
         <div >
         <label for="NewPassword" class="form-label" > New Instructor ID </label>
            <div class="input-group mb-3">
            <input typeclass="form-control" id="uniqueID" placeholder="id" required="required"></input>
            </div>
         </div>

         <div>
         <label for="ConfirmPassword" class="form-label" >Course Name</label>
        <div class="input-group mb-3">
        <input type class="form-control" id="uniqueID1" placeholder="course " required="required"></input>
        </div>
        </div>




        <div className="right">
        <button type="button" class="btn btn-primary" onClick= {this.handleClick}>update     instructor</button>
        </div>

        
        </form> 
        
        </div>
        </div>
        </div>

)

}


}

export default updateinstructor;
