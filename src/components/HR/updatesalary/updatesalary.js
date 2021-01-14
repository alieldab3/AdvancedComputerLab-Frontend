import React , { Component } from 'react';
import axios from 'axios'
import './updatesalary.css';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { message, Button ,space} from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';



const success = () => {
    
    message.success('staff member salary updated successfully');
  };

const warning = () => {
    
    message.warning('Plz fill all the required information');
  };
  
  const error1 = () => {
    message.error('Member doesnot exist');
  };
    
  
class updatesalary extends Component{
  
  state ={
    token : this.props.token
  }
  
   
    


    callAPI() {
      let a=document.getElementById("uniqueID").value;
      let b=document.getElementById("uniqueID1").value;
      
      if(a&&b){
    axios.get('http://localhost:5000/updateSalary', {
      headers: {'auth-token': this.state.token},
           
        params:{
      id:a,
      salary1:b
        }
    },{withCredentials:true})
          .then(function (response) {
           {success()}
           console.log(response);
          
        })
       
          .catch(function (error){
        {error1()}
            console.log("no")
      
            console.log(error);
          
      //     message.error(error.response.data);
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
   


        <div class="login-box">
  <h2>update staff member salary </h2>
  <form>
  <div class="user-box">
      <input type= "text" name="" required=""id="uniqueID"placeholder="plz enter id number"  />
      <label>ID</label>
    </div>
 
    <div class="user-box">
      <input type= "text" name="" required=""id="uniqueID1"placeholder="plz enter new salary"  />
      <label>Salary</label>
    </div>
 
    
  
  
  <a href="#">
  
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.handleClick} >Update Salary</button>
   
    </a>
 
    
    
  

  </form>
</div>
</div>

    )
}


}

export default updatesalary;
