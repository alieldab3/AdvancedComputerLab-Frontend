import React , { Component } from 'react';
import axios from 'axios'
import './viewstaffmissingdays.css';
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
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'misseddays',
    dataIndex: 'misseddays',
    key: 'misseddays',
  },
]
let data1 = [];

const success = () => {
    
    message.success('member id added successfully plz press view all with missing days');
};
const success1 = () => {
    
    message.success('table shown successfully');
};

const warning = () => {
    
    message.warning('Plz fill all the required information');
  };
  
  const error1 = () => {
    message.error('plz enter valid data');
  };
    
    
    class viewstaffmissingdays extends React.Component{
      constructor(props) {
        super(props)

        this.state = {
            arr: [],
            token : this.props.token
   
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
      let a=document.getElementById("uniqueID").value;
      if(a){
    axios.get('https://advancedcomputerlab-backend.herokuapp.com/viewAllMissingDays/:month" component={UserPage}', {
      headers: {'auth-token': this.state.token},
              
    params:{
            month:a
        }
       
    },{withCredentials:true})
          .then(function (response) {
            console.log(response.data);
     
           success()
           console.log(response.data)

           
      
  response.data.forEach(element =>{  
   data1.push({id:element.id,name:element.name,misseddays:element.Days});
   });
   console.log(data1);
    
        })
       
          .catch(function (error){
        error1()
            console.log("no")
      
            console.log(error);
          
      //      message.error(error.response.data);
          });
   
   
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
          
      <input type= "text"  className="hi" required=""id="uniqueID"placeholder="plz enter Month" required="required" />
  <div>
  <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.change} >view all with missing days</button>
  
      </div>
      <div className="plz">
      <button type="submit"   className="btn btn-primary btn-block btn-large"onClick={this.handleClick} >Submit month</button>
    
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


export default viewstaffmissingdays;
