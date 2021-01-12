import React , { Component } from 'react';
import axios from 'axios'
import './deletedepartment.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { message} from 'antd';



const success = () => {
    
  message.success('Faculty updated successfully');
};

const error1 = () => {
  message.error('Cannot update faculty this faculty donot exist' );
};

class deletedepartment extends Component{
  
   
    


    callAPI(e) {
      let a=document.getElementById("uniqueID").value;
   
      if(a){
           console.log(a);
  e.preventDefault();

    axios.delete('http://localhost:5000/delDepart', {
        params:{
          nam:a
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
    
    handleClick= (e) => {

     this.callAPI(e);
   
    }
render() {
    return(

<div className="login">
	<h1>Delete Department</h1>
    <form method="form">
    	<input type="text" id="uniqueID" className="hi" name="u" placeholder="Department Name" required="required" />
       
       <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.handleClick} >Delete department</button>
     
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


export default deletedepartment;
