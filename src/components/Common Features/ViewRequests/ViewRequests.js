import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './ViewRequests.css';

const ViewRequests =() =>{
    return(
        <div className="main">
            <h2>ViewRequests</h2>
            <p>This is ViewRequests</p>
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


export default ViewRequests;
