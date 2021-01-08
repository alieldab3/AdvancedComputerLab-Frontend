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
        console.log("hi")
        axios.get("http://localhost:5000/addLocation")            
            .then(res => console.log(res))
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
            
    }

    componentDidMount() {
        this.callAPI();
    }
    
    handleClick= () => {
     console.log("hi");
    }
render() {
    return(
        
<div className="login-page">
  <div className="form">
    <form className="login-form">
      <input type="text"  id="uniqueID"  placeholder="location name"/>
      <input type="text" placeholder="Capacity"/>
      <input type="text" placeholder="type"/>

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
