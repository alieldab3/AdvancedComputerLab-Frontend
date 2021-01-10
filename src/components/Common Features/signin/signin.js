import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './signin.css';

const signin =() =>{
    return(
        <div className="main">
            <h2>signin</h2>
            <p>This is signin</p>
        </div>
    )
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


export default signin;
