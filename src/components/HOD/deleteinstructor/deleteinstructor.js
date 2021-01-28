/*import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './deleteinstructor.css';

const deleteinstructor =() =>{
    return(
        <div className="main">
            <h2>deleteinstructor</h2>
            <p>This is deleteinstructor</p>
        </div>
    )
}
// class viewschedule extends Component {
//   render () {
//     return (
//       <BrowserRouter>
//       <Sidebar />
//       {/* <Route exact path='/' component={Index} />
//       <Route path='/contact' component={Contact} /> }
//     </BrowserRouter>

//    );
//   }
// }


export default deleteinstructor;*/
import React, { Component } from 'react';
import axios from 'axios'
import './deleteinstructor.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { message } from 'antd';


const success = () => {

  message.success('Instructor deleted successfully successfully');
};

const error1 = () => {
  message.error('Instructor is not  assigned to this course');
};
const warning = () => {

  message.warning('Please fill all the required information');
};


class deleteinstructor extends Component {



  state = {
    token: this.props.token
  }





  callAPI() {
    let a = document.getElementById("uniqueID").value;
    let b = document.getElementById("uniqueID1").value;

    if (a && b) {
      success();
    }
    else {
      warning();
      /*    axios.put('https://advancedcomputerlab-backend.herokuapp.com/addInstructor/ac-30/:CSEN-704', {
               
          id:a,
                course:b
                 
                },{
                  headers: {'auth-token': this.state.token}
                  }
                  ,{withCredentials:true})
                .then(function (response) {
                 success()
                 console.log(response);
                
              })
             
                .catch(function (error){
              error1()
                  console.log("no")
            
                  console.log(error);
                
            //      message.error(error.response.data);
                });*/
    }
  }

  componentDidMount() {

  }

  handleClick = () => {

    this.callAPI();

  }
  render() {
    return (

      <div className="mainp">
        <div className="container">


          <div className='cardupdate'>

            <form class="form-floating">
              {/* class="form-control is-invalid" */}
              <br></br>
              <h3> delete a course instructor from a course they are assigned to</h3>


              <div class="mb-3">
              </div>
              <br></br>

              <ul>
              </ul>

              <div >
                <label for="NewPassword" class="form-label" >Instructor ID </label>
                <div class="input-group mb-3">
                  <input typeclass="form-control" id="uniqueID" placeholder="id" required="required"></input>
                </div>
              </div>


              <div>
                <label for="ConfirmPassword" class="form-label" >Course Name</label>
                <div class="input-group mb-3">
                  <input type class="form-control" id="uniqueID1" placeholder="course " required="required"></input>
                </div>
              </div>




              <div className="right">
                <button type="button" class="btn btn-primary" onClick={this.handleClick}>delete     instructor</button>
              </div>


            </form>

          </div>
        </div>
      </div>

    )

  }


}

export default deleteinstructor;
