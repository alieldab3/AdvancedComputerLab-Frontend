import React , { Component } from 'react';
import axios from 'axios'
import './updatefaculty.css';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { message, Button ,space} from 'antd';



const success = () => {
    
  message.success('Faculty updated successfully');
};

const error1 = () => {
  message.error('Cannot update faculty this faculty donot exist' );
};

class updatefaculty extends Component{
  
   
    


    callAPI(e) {
      let a=document.getElementById("uniqueID").value;
      let b=document.getElementById("uniqueID1").value;
       if(a&&b){
    {e.preventDefault()};

    axios.get('http://localhost:5000/updateFaculty', {
        params:{
          nam:a,
          newname:b
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

<div className="login">
	<h1>Update Faculty</h1>
    <form method="form">
    	<input type="text" id="uniqueID" className="hi" name="u" placeholder="Faculty Old Name" required="required" />
        <input type="text" id="uniqueID1" className="hi" name="u" placeholder="Faculty New Name" required="required" />
       
       <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.handleClick} >Update faculty</button>
     
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


export default updatefaculty;
