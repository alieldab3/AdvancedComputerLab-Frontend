


import React, { Component } from 'react';
import axios from 'axios'
import './viewteachingassignments.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { message } from 'antd';
import { Table, Tag, Space } from 'antd';
const columns = [
    {
        title: 'slot id',
        dataIndex: 'sId',
        key: 'sId',
      }, 
  {
    title: 'slot',
    dataIndex: 'slot',
    key: 'slot',
  },
  {
    title: 'member id',
    dataIndex: 'mId',
    key: 'mId',
  },
  {
    title: 'member',
    dataIndex: 'member',
    key: 'member',
  },
]
let data = [];

const success = () => {

  message.success('Course assigned  successfully');
};

const error1 = () => {
  message.error('Cannot create faculty already exists');
};
const warning = () => {

  message.warning('Please fill all the required information');
};


class viewteachingassignments extends Component {



  state = {
    token: this.props.token,
    arr: []
  }





  callAPI() {
    let a = document.getElementById("uniqueID").value;

    if (a) {
      data = [];
      data.push({ sId: "4", member: "ali", mId: "ac-31", slot: "Sunday second" })

      this.setState({
        arr: data
      })
    }
    else warning();
    /* else{
         
       data=[];
      data.push({id:"ac-30",name:"ali",dayoff:"Saturday"})
      data.push({id:"ac-31",name:"ali11",dayoff:"Saturday"})
      data.push({id:"ac-32",name:"alim",dayoff:"Sunday"})
   
      console.log(data)
      this.setState({
          arr:data
        })
  
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
            });
     }  */
  }

  componentDidMount() {

  }

  handleClick = () => {

    this.callAPI();

  }
  render() {
    return (

      <div className="mainP1">

        <div className="container">


          <div className='cardupdate'>

            <form class="form-floating">
              {/* class="form-control is-invalid" */}
            
              <br></br>

              <h3>view teaching assignments of a course</h3>


              <div class="mb-3">
              </div>
              <br></br>

              <ul>
              </ul>

              <div >
                <label for="NewPassword" class="form-label" > Course Name </label>
                <div class="input-group mb-3">
                  <input typeclass="form-control" id="uniqueID" placeholder="id" required="required"></input>
                </div >

                <Table columns={columns} class="hello" dataSource={this.state.arr} />);


         </div>

              <div>
                <div class="input-group mb-3">
                </div>
              </div>




              <div className="right">
                <button type="button" class="btn btn-primary" onClick={this.handleClick}>View</button>
              </div>


            </form>

          </div>
        </div>
      </div>

    )

  }


}

export default viewteachingassignments;
