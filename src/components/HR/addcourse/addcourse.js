import React , { Component } from 'react';
import axios from 'axios'
import './addcourse.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { message} from 'antd';



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
      e.preventDefault();
      console.log(a+" "+b);
    axios.post('http://localhost:5000/addCourse', {
        depname:a,
        nam:b,
        id:c  
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
    <h1>Add the course  using already existed Department!</h1>
    <form method="form">
    
   
    <div>  
    	<input type="text" id="uniqueID" className="hi" name="u" placeholder="Department Name" required="required" />
      </div>
      <div>  
   
        <input type="text" id="uniqueID1" className="hi" name="u" placeholder="Course Name" required="required" />
        </div>
        <div>  
   
        <input type="text" id="uniqueID2" className="hi" name="u" placeholder="Course id or code" required="required" />
        </div>
        <div className="lol">  
    <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.handleClick} >Create Course </button>
    </div>
        
       
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
