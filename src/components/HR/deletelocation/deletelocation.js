import React , { Component } from 'react';
import axios from 'axios'
import './deletelocation.css';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { message, Button ,space,spin} from 'antd';



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
        {e.preventDefault()};
    
        axios.delete('http://localhost:5000/delLocation', {
       params:{
        nam:a,
       }
       
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
    
    handleClick= (e) => {
    
     this.callAPI(e);
   
    }
render() {
    return(
        
<div className="login-page">
<h2 className="formal"  >  Delete location</h2>
    
  <div className="form">
    <form className="login-form">
      <input type="text"  id="uniqueID"  placeholder="the location you wish to delete"required="required" />
      

      <button type="submit"  onClick={this.handleClick}  >delete location</button>
       
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


export default deletelocation;
