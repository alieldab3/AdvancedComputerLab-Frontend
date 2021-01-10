import React , { Component } from 'react';
import axios from 'axios'
import './addcourse.css';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { message, Button ,space} from 'antd';



const success = () => {
    
  message.success('Course created successfully and added to specific department');
};

const error1 = () => {
  message.error('Cannot create Course already exists or Department doesnot exist');
};
  
class addcourse extends Component{
  
   
    


    callAPI(e) {
      let a=document.getElementById("uniqueID").value;
      let b=document.getElementById("uniqueID1").value;
      let c=document.getElementById("uniqueID2").value;
   
      if(a&&b&&c){
      {e.preventDefault()};
      console.log(a+" "+b);
    axios.post('http://localhost:5000/addCourse', {
        depname:a,
        nam:b,
        id:c  
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
<div class="container">  
  <form id="contact" action="" method="post">
  <h3>Add course</h3>
    <h4>Add the course u want using already existed Department!</h4>
    <form method="form">
    	<input type="text" id="uniqueID" className="hi" name="u" placeholder="Department Name" required="required" />
        <input type="text" id="uniqueID1" className="hi" name="u" placeholder="Course Name" required="required" />
        <input type="text" id="uniqueID2" className="hi" name="u" placeholder="Course id or code" required="required" />
        
       
    <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.handleClick} >Create Department Under faculty</button>
    </form>
     
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


export default addcourse;
