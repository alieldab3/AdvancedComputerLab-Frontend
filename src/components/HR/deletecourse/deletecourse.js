import React , { Component } from 'react';
import axios from 'axios'
import './deletecourse.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { message} from 'antd';



const success = () => {
    
  message.success('Course deletd successfully ');
};

const error1 = () => {
  message.error('Cannot delete Course deosnot exist ');
};
  
class deletecourse extends Component{
  
  state ={
    token : this.props.token
  }
  
   
    


    callAPI(e) {
      let a=document.getElementById("uniqueID").value;
      
      if(a){
      e.preventDefault();
    axios.delete('https://advancedcomputerlab-backend.herokuapp.com/delCourse', {
      headers: {'auth-token': this.state.token},
           
    params:{
        id:a,
        
       }
       },{withCredentials:true})
          .then(function (response) {
           success()
           console.log(response);
          
        })
       
          .catch(function (error){
        error1()
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
<div class="login">  
   
    <h1>Delete the course using already existing course!</h1>
    <form method="form">
    <div>
    <input type="text" id="uniqueID" className="hi" name="u" placeholder="Course code" required="required" />      
    </div>
    <button type="submit"   className="hi"onClick={this.handleClick} >Delete Course</button>
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
