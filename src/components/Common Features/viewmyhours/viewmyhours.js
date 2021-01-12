import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './viewmyhours.css';

const viewmyhours =() =>{
    return(
        <div className="main">
            <h2>viewmyhours</h2>
            <p>This is viewmyhours</p>
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


export default viewmyhours;
