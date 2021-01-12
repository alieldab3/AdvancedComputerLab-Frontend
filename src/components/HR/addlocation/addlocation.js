import React , { Component } from 'react';
import axios from 'axios'
import './addlocation.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { message} from 'antd';



const success = () => {
  message.success('Location added successfully');
};

const error1 = () => {
  message.error('Sorry cannot add this location either some info is missed or it already exists ');
};
class addlocation extends Component{
  
   
    


    callAPI(e) {
      let a=document.getElementById("uniqueID").value;
     let b=document.getElementById("uniqueID1").value;
     let c=document.getElementById("uniqueID2").value;
     let d=document.getElementById("uniqueID3").value;
    console.log(a+" "+b+" "+c+" "+d);
    if(a&&b&&c&&d){ 
      e.preventDefault();
    
     
      axios.post('http://localhost:5000/addLocation', {
          nam:a,
           cap:b,
            typ:c,
           occ:d
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

    componentDidMount(e) {
    }
    
    handleClick= (e) => {
      
     this.callAPI(e);
   
    }
render() {
    return(
        
<div class="login">  

<h1>  Add location</h1>
    
    <form method="form">
    
     <div>
      <input type="text" className="hi"  id="uniqueID"  placeholder="location name" required="required"/>
      </div>
      <div>
      <input type="text" className="hi"  id="uniqueID1" placeholder="Capacity" required="required"/>
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
      <input type="text" className="hi"  id="uniqueID3" placeholder="occupation"required="required"/>
      </div>
      
      <div className="lol1">  
      <button className="btn btn-primary btn-block btn-large" onClick={this.handleClick}  >add location</button>
      </div>
       
    </form>
     
    
</div>

)
    }
}

export default addlocation;
