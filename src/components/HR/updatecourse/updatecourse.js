import React , { Component } from 'react';
import axios from 'axios'
import './updatecourse.css';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { message, Button ,space} from 'antd';



const success = () => {
    
  message.success('Course updated successfully ');
};

const error1 = () => {
  message.error('Cannot update Course deosnot exist ');
};
  
class updatecourse extends Component{
  
   
    


    callAPI(e) {
      let a=document.getElementById("uniqueID").value;
      let b=document.getElementById("uniqueID1").value;
      let c=document.getElementById("uniqueID2").value;
   
      if(a&&b&&c){
      {e.preventDefault()};
    axios.get('http://localhost:5000/updateCourse', {
    params:{
        oldid:a,
        newid:b,
        newname:c
        
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
  <h3>Update course</h3>
    <h4>Update the course u want using already existing course!</h4>
    <form method="form">
    <input type="text" id="uniqueID" className="hi" name="u" placeholder="Course code" required="required" />      
         <input type="text" id="uniqueID1" className="hi" name="u" placeholder="Course new code" required="required" />
        <input type="text" id="uniqueID2" className="hi" name="u" placeholder="Course new name" required="required" />
    <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.handleClick} >Update Course</button>
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


export default updatecourse;
