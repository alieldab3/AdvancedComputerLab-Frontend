import React , { Component } from 'react';
import axios from 'axios'
import './deletecourse.css';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { message, Button ,space} from 'antd';



const success = () => {
    
  message.success('Course deletd successfully ');
};

const error1 = () => {
  message.error('Cannot delete Course deosnot exist ');
};
  
class deletecourse extends Component{
  
   
    


    callAPI(e) {
      let a=document.getElementById("uniqueID").value;
      
      if(a){
      {e.preventDefault()};
    axios.delete('http://localhost:5000/delCourse', {
    params:{
        id:a,
        
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
  <h3>Delete course</h3>
    <h4>Delete the course u want using already existing course!</h4>
    <form method="form">
    <input type="text" id="uniqueID" className="hi" name="u" placeholder="Course code" required="required" />      
    <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.handleClick} >Delete Course</button>
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


export default deletecourse;
