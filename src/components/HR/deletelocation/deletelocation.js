import React , { Component } from 'react';
import axios from 'axios'
import './deletelocation.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { message} from 'antd';



const success = () => {
  message.success('Location deleted successfully');
};

const error1 = () => {
  message.error('Sorry this location doesnot exist');
};
class deletelocation extends Component{
  
   
    


    callAPI(e) {
      
        let a=document.getElementById("uniqueID").value;
      if(a){
        e.preventDefault();
    
        axios.delete('http://localhost:5000/delLocation', {
       params:{
        nam:a,
       }
       
        },{withCredentials:true})
          .then(function (response) {
     
            success()
          
        })
       
          .catch(function (error){
        error1()
            console.log("no")
      
            console.log(error);
          
      //      message.error(error.response.data);
          });
          
    }
    }
    
    handleClick= (e) => {
    
     this.callAPI(e);
   
    }
render() {
    return(
        
<div className="login">
<h1  >  Delete location</h1>
    
  <div className="form">
  <form method="form">
   <input type="text"  id="uniqueID" className="hi" placeholder="the location you wish to delete"required="required" />
      
      <button type="submit"  className="btn btn-primary btn-block btn-large" onClick={this.handleClick}  >delete location</button>
       
    </form>
     
  </div>
    
</div>

)
    }
}

export default deletelocation;
