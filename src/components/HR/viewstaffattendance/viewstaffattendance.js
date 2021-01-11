import React , { Component } from 'react';
import axios from 'axios'
import './viewstaffattendance.css';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { message, Button ,space} from 'antd';
import "antd/dist/antd.css";

const success = () => {
    
    message.success('staff member deleted successfully from the system');
  };

const warning = () => {
    
    message.warning('Plz fill all the required information');
  };
  
  const error1 = () => {
    message.error('Member doesnot exist');
  };
    
  
class viewstaffattendance extends Component{
  
   
    


    callAPI() {
      let a=document.getElementById("uniqueID").value;
      if(a){
    axios.get('http://localhost:5000/viewattandence', {
        params:{
      id:a
        }
    },{withCredentials:true})
          .then(function (response) {
           {success()}
           console.log("plz")
      
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
        <div class="login-box">
  <h2>view attendance</h2>
  <form>
  <div class="user-box">
      <input type= "text" name="" required=""id="uniqueID"placeholder="plz enter id number"  />
      <label>ID</label>
    </div>
 
 
    
  
  
  <a href="#">
  
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.handleClick} >view attendance</button>
   
    </a>
 
    
  

  </form>

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


export default viewstaffattendance;
