import React , { Component } from 'react';
import axios from 'axios'
import './addfaculty.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { message} from 'antd';



const success = () => {
    
  message.success('Faculty created successfully');
};

const error1 = () => {
  message.error('Cannot create faculty already exists' );
};

  
class addfaculty extends Component{
  
   
   
  state ={
    token : this.props.token
  }
  
   
    


    callAPI(e) {
      let a=document.getElementById("uniqueID").value;
    if(!a){
    }
   else{
    e.preventDefault();

    axios.post('https://advancedcomputerlab-backend.herokuapp.com/addFaculty', {
          nam:a,
          department:[]
           
          },{
            headers: {'auth-token': this.state.token}
            }
            ,{withCredentials:true})
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

<div className="login">
	<h1>Add new Faculty</h1>
    <form method="form">
    	
      <input type="text" id="uniqueID" className="hi" name="u" placeholder="Faculty Name" required="required" />
       <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.handleClick} >Create faculty</button>
     
    </form>
</div>
    )
}


}

export default addfaculty;
