import React , { Component } from 'react';
import axios from 'axios'
import './updatelocation.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { message} from 'antd';



const success = () => {
  message.success('Location updated successfully');
};

const warning = () => {
    
  message.warning('Plz fill all the required information');
};
const error1 = () => {
  message.error('Sorry cannot update this location either some info is missed or it location doesnot exist ');
};
class updatelocation extends Component{
  
   
    
  state ={
    token : this.props.token
  }
  
   

    callAPI(e) {
      let a=document.getElementById("uniqueID").value;
     let b=document.getElementById("uniqueID1").value;
     let c=document.getElementById("uniqueID2").value;
     let d=document.getElementById("uniqueID3").value;
    console.log(a+" "+b+" "+c+" "+d);
    if(a&&b&&c&&d){
        e.preventDefault();
    
        axios.get('http://localhost:5000/updateLocation', {
          
            headers: {'auth-token': this.state.token},
            
   params:{
        nam:a,
           cap:b,
            typ:c,
           occ:d
   }  
   
        },{withCredentials:true})
          .then(function (response) {
            success()
         console.log(response)
     
        
        })
       
          .catch(function (error){
        error1()
            console.log("no")
      
            console.log(error);
          
      //      message.error(error.response.data);
          });
          

    }
    else{
      warning()
        
    }
    }
    
    handleClick= (e) => {
    
     this.callAPI(e);
   
    }
render() {
    return(
        
<div className="login">
<h1>  Update location</h1>
    
  <div className="form">
      <div>
      <input type="text"  id="uniqueID" className="hi"  placeholder="the location you want to update"required="required"/>
      </div>
      <div>
      <input type="text" id="uniqueID1"className="hi" placeholder="new Capacity"required="required"/>
      </div>
      <div>
      <select className="hi" id="uniqueID2">
  <option>lab</option>
  <option>tutorial</option>
  <option>office</option>
  <option>hall</option>
  
  </select>
     </div>
      <div> 
      <input type="text" id="uniqueID3" className="hi" placeholder="new occupation"required="required"/>
      </div>
     
      <div className="lol1">
      <button onClick={this.handleClick}  className="btn btn-primary btn-block btn-large" >update location</button>
      </div>
  
    
  </div>
    
</div>

)
    }
}


export default updatelocation;
