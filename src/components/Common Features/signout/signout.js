import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './signout.css';

const signout =() =>{
    return(
        <div className="main">
            <h2>signout</h2>
            <p>This is signout</p>
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


export default signout;
