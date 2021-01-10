import React , { Component } from 'react';
import axios from 'axios'
import './addlocation.css';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { message, Button ,space} from 'antd';


const info = () => {
  message.info('This is a normal message');
};
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
      {e.preventDefault()};
    
     
      axios.post('http://localhost:5000/addLocation', {
          nam:a,
           cap:b,
            typ:c,
           occ:d
          },{withCredentials:true})
          .then(function (response) {
            {success()}
          
        })
       
          .catch(function (error){
        {error1()}
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
        
<div className="login-page">
<h2 className="formal" >  Add location</h2>
    
  <div className="form">
    <form className="login-form">

      <input type="text"  id="uniqueID"  placeholder="location name" required="required"/>
      <input type="text" id="uniqueID1" placeholder="Capacity" required="required"/>
      <input type="text" id="uniqueID2" placeholder="type"required="required"/>
      <input type="text" id="uniqueID3" placeholder="occupation"required="required"/>


      <button onClick={this.handleClick}  >add location</button>
       
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


export default addlocation;
