import React , { Component } from 'react';
import axios from 'axios'
import './removeassignedmember.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { message} from 'antd';
import { Table, Tag, Space } from 'antd';
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'dayoff',
    dataIndex: 'dayoff',
    key: 'dayoff',
  },
]
let data=[];
   
const success = () => {
    
  message.success(' assignement deleted  successfully');
};

const error1 = () => {
  message.error('Cannot create faculty already exists' );
};
const warning = () => {
    
  message.warning('Plz fill all the required information');
};

  
class removeassignedmember extends Component{
  
   
   
  state ={
    token : this.props.token,
    arr:[]
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

        <div className="mainP">

        <div className="container">


        <div className = 'cardupdate'>

        <form class="form-floating">
            {/* class="form-control is-invalid" */}

        <p>Remove Assigned Member</p>

        
        <div class="mb-3">
        </div>
        <br></br>
        
        <ul>
        </ul>

         <div >
         <label for="NewPassword" class="form-label" >ID </label>
            <div class="input-group mb-3">
            <input typeclass="form-control" id="uniqueID" placeholder="id"></input>
            </div>
            <div>
            <br></br>
        
            <input typeclass="form-control" id="uniqueID1" placeholder="Course Name"></input>
            </div>
          

         </div>

         <div>
        <div class="input-group mb-3">
        </div>
        </div>




        <div className="right">
        <button type="button" class="btn btn-primary" onClick= {this.handleClick}>Remove</button>
        </div>

        
        </form> 
        
        </div>
        </div>
        </div>

)

}


}

export default removeassignedmember;
