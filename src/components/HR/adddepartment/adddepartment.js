import React , { Component } from 'react';
import axios from 'axios'
import './adddepartment.css';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { message, Button ,space} from 'antd';



const success = () => {
    
  message.success('Department created successfully');
};

const error1 = () => {
  message.error('Cannot create Department already exists or faculty doesnot exist');
};
  
class adddepartment extends Component{
  
   
    


    callAPI(e) {
      let a=document.getElementById("uniqueID").value;
      let b=document.getElementById("uniqueID1").value;
   
      if(a&&b){
      {e.preventDefault()};
      console.log(a+" "+b);
    axios.post('http://localhost:5000/addDepart', {
          facname:a,
          nam:b,
           
          },{withCredentials:true})
          .then(function (response) {
           {success()}
           console.log(response);
          
        })
       
          .catch(function (error){
        {error1()}
            console.log("no")
      
            console.log(error);
          
      //      message.error(error.response.data);
          });
   }  
    }

    componentDidMount() {
    
    }
    
    handleClick= (e) => {

     this.callAPI(e);
   
    }
render() {
    return(

<div className="login">
	<h1>Add new Faculty</h1>
    <form method="form">
    	<input type="text" id="uniqueID" className="hi" name="u" placeholder="Faculty Name" required="required" />
        <input type="text" id="uniqueID1" className="hi" name="u" placeholder="Department Name" required="required" />
        
       <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.handleClick} >Create Department Under faculty</button>
     
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


export default adddepartment;
