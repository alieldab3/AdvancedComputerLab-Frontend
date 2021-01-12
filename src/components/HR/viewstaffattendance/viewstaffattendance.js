import React , { Component } from 'react';
import axios from 'axios'
import './viewstaffattendance.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { message} from 'antd';
import "antd/dist/antd.css";
import {useState,useEffect} from "react";
import { Table, Tag, Space } from 'antd';
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'signin',
    dataIndex: 'signin',
    key: 'signin',
  },
]
let data1 = [];

const success = () => {
    
    message.success('id submitted successfullu plz press view attendance button');
  };

const warning = () => {
    
    message.warning('Plz fill all the required information');
  };
  
  
const success1 = () => {
    
    message.success('table shown successfully');
};
const error1 = () => {
  message.error('plz enter valid data');
};

  
    class viewstaffattendance extends React.Component{
      constructor(props) {
        super(props)

        this.state = {
            arr: []
        }
    }

change =(e)=>{
success1();
this.setState({
  arr:data1
})
e.preventDefault();

}

    callAPI() {
      data1=[];
      console.log(data1)
      let a=document.getElementById("uniqueID").value;
      if(a){
    axios.get('http://localhost:5000/viewattandence', {
        params:{
      id:a
        }
    },{withCredentials:true})
          .then(function (response) {
           success()
           console.log("plz")

           
      
  response.data.forEach(element =>{
    console.log(element.signIn)
    if(element.signIn)
    element.signIn="Sign In";
    else
    element.signIn="Sign Out";
    
   data1.push({id:a,time:element.time,signin:element.signIn});
   });
        })
       
          .catch(function (error){
        error1()
            console.log("no")
      
            console.log(error);
          
      //      message.error(error.response.data);
          });
   console.log("idiot")
   console.log(this.state.arr)
   
   
        }
        else{
            warning();
        }  
        
    }

    componentDidMount() {
    
    }
    
    handleClick= (e) => {
e.preventDefault();
     this.callAPI(e);
   
    }

render() {
    return(
      <div className="edu">
      
      <div className="login">
       <form method="form">
          
      <input type= "text"  className="hi" required=""id="uniqueID"placeholder="plz enter id number" required="required" />
  <div>
  <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.change} >view his attendance</button>
  
      </div>
      <div className="plz">
      <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.handleClick} >Submit member</button>
    
      </div>
  
      <div className="haha">
<Table columns={columns} dataSource={this.state.arr} />);
</div>
 

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


export default viewstaffattendance;
