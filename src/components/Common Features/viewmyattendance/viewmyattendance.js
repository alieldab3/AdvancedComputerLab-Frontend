import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './viewmyattendance.css';

const viewmyattendance =() =>{
    return(
        <div className="main">
            <h2>viewmyattendance</h2>
            <p>This is viewmyattendance</p>
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


export default viewmyattendance;
