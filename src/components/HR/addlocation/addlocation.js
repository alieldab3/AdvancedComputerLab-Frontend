import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import axios from 'axios'
import './addlocation.css';
class addlocation extends Component{
  state= {
    suc:""
  }  
  constructor(props) {
        super(props);
    //    this.state = { apiResponse: "this is my lane boy" };
    }


    change = (m) =>{
      this.setState({
        suc:m
      })
    }

    callAPI() {
       this.change("asdas");  
      let a=document.getElementById("uniqueID").value;
     let b=document.getElementById("uniqueID1").value;
     let c=document.getElementById("uniqueID2").value;
     let d=document.getElementById("uniqueID3").value;
    console.log(a+" "+b+" "+c+" "+d);
      let message;
        axios.post('http://localhost:5000/addLocation', {
          nam:a,
           cap:b,
            typ:c,
           occ:d
          },{withCredentials:true})
          .then(function (response) {
            console.log(response);
          message.success(response.data);
          
        })
       
          .catch(function (error){
        
            console.log("no")
      
            console.log(error);
          
            message.error(error.response.data);
          });
          
    }

    componentDidMount() {
    }
    
    handleClick= () => {
     
     this.callAPI();
   
    }
render() {
    return(
        
<div className="login-page">
  <div className="form">
    <form className="login-form">
      <input type="text"  id="uniqueID"  placeholder="location name"/>
      <input type="text" id="uniqueID1" placeholder="Capacity"/>
      <input type="text" id="uniqueID2" placeholder="type"/>
      <input type="text" id="uniqueID3" placeholder="occupation"/>
       
      <button onClick={this.handleClick}  >add location</button>
      <p className="App-intro">{this.state.suc}</p>
         
    </form>
     
  </div>
    
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


export default addlocation;
