import React , { Component } from 'react';
import axios from 'axios'
import './addsignrecord.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { message} from 'antd';



const success = () => {
    
    message.success('sign record added');
  };

const warning = () => {
    
    message.warning('Plz fill all the required information');
  };
  
  const error1 = () => {
    message.error('Member doesnot exist');
  };
    
  
class addsignrecord extends Component{
  state ={
    token : this.props.token
  }
  
   
    


    callAPI() {
        
    //"rec":{"time" :"2018-06-29T13:34:00.000","signIn" :true}
      let a=document.getElementById("uniqueID").value;
      let b=document.getElementById("uniqueID1").value;
      let c=document.getElementById("uniqueID2").value;
      if(c==="signIn")
      c=true;
      else
      c=false;
      if(a&&b){
    axios.post('http://localhost:5000/addsignup', {
      staffid:a,
      rec:{time:b,signIn:c}
    
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
          
      //     message.error(error.response.data);
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
  <h2>add missing record </h2>
  <form>
  <div class="user-box">
      <input type= "text" name="" required=""id="uniqueID"placeholder="plz enter id number"  />
      <label>ID</label>
    </div>
 
    <div class="user-box">
      <input type= "text" name="" required=""id="uniqueID1"placeholder="YYYY-MM-DDTHH:MM:00.000 date format " />
      <label>Time</label>
    </div>
 
    
    <div className="user-box">
     <select className="classic" id="uniqueID2">
  <option>signIn</option>
  <option>signOut</option>
  </select>
  </div>
 
 
  
  
  <a href="#">
  
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.handleClick} >Add missing record</button>
   
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


export default addsignrecord;
