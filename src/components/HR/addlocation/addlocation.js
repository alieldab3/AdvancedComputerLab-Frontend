import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import axios from 'axios'
import './addlocation.css';
class addlocation extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    callAPI() {
      let a=document.getElementById("uniqueID").value;
     let b=document.getElementById("uniqueID1").value;
     let c=document.getElementById("uniqueID2").value;
     let d=document.getElementById("uniqueID3").value;
    console.log(a+" "+b+" "+c+" "+d);
      let message;
        console.log("hi")
        axios.post('http://localhost:5000/addLocation', {
          nam:a,
           cap:b,
            typ:c,
           occ:d
          },{withCredentials:true})
          .then(function (response) {
            console.log("fuck you");
        
            console.log(response);
          message.success(response.data);
          
        })
          .catch(function (error){
            console.log("fuck you1");
          
            console.log(error);
          
            message.error(error.response.data);
          });
          console.log("fuck you2");
          
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
      <p className="App-intro">{this.state.apiResponse}</p>
          
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
