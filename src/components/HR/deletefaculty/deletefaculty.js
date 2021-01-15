import React , { Component } from 'react';
import axios from 'axios'
import './deletefaculty.css';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { message, Button ,space} from 'antd';



const success = () => {
    
  message.success('Faculty delete successfully');
};

const error1 = () => {
  message.error('Cannot delete faculty this faculty donot exist' );
};

class deletefaculty extends Component{
  
  state ={
    token : this.props.token
  }
  
   
    


    callAPI(e) {
      let a=document.getElementById("uniqueID").value;
   
      if(a){
           console.log(a);
    {e.preventDefault()};

    axios.delete('http://localhost:5000/delFaculty', {
      headers: {'auth-token': this.state.token},
              
    params:{
          nam:a
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
    
    handleClick= (e) => {

     this.callAPI(e);
   
    }
render() {
    return(

<div className="login">
	<h1>delete Faculty</h1>
    <form method="form">
    	<input type="text" id="uniqueID" className="hi" name="u" placeholder="Faculty Name" required="required" />
       
       <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.handleClick} >Delete faculty</button>
     
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


export default deletefaculty;
