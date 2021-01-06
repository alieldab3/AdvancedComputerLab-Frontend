import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './viewstaffrequests.css';

const viewstaffrequests =() =>{
    return(
        <div className="main">
            <h2>viewstaffrequests</h2>
            <p>This is viewstaffrequests</p>
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


export default viewstaffrequests;
