import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './viewSchedule.css';

const viewSchedule =() =>{
    return(
        <div className="main">
            <h2>viewSchedule</h2>
            <p>This is viewSchedule</p>
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


export default viewSchedule;
