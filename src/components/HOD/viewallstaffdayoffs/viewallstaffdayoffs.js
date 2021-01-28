import React , { Component } from 'react';
import axios from 'axios'
import './viewallstaffdayoffs.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { message} from 'antd';
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
    title: 'dayoff',
    dataIndex: 'dayoff',
    key: 'dayoff',
  },
]
let data=[];
   
const success = () => {
    
  message.success('Course assigned  successfully');
};

const error1 = () => {
  message.error('Cannot create faculty already exists' );
};
const warning = () => {
    
  message.warning('Plz fill all the required information');
};

  
class viewallstaffdayoffs extends Component{
  
   
   
  state ={
    token : this.props.token,
    arr :[{id:"ac-31",name:"ali",dayoff:"Saturday"},{id:"ac-32",name:"omar",dayoff:"sunday"},{id:"ac-32",name:"Aziz",dayoff:"Monday"}]
    
    
  }
  
   
    


    callAPI() {
      let a=document.getElementById("uniqueID").value;
   
      if(a){
           data=[];
           data.push({id:"ac-30",name:"ali",dayoff:"Saturday"})
  
           this.setState({
    arr:data
  })
success();
      }
   else{
       
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
          });*/
   }  
    }

    componentDidMount() {
     
    }
    
    handleClick= () => {

     this.callAPI();
   
    }
render() {
    return(

      
        <div className="mainp">

        <div className="container">


        <div className = 'cardupdate'>

        <form class="form-floating">
            {/* class="form-control is-invalid" */}
            <br></br>

        <h3> all staff daysoff</h3>

        
        <div class="mb-3">
        </div>
        <br></br>
        
        <ul>
        </ul>

        <div >
         
            <Table columns={columns} class="hello" dataSource={this.state.arr} />);


         </div>

         <div>
        <div class="input-group mb-3">
        </div>
        </div>




      

        
        </form> 
        
        </div>
        </div>
        </div>

)

}


}

export default viewallstaffdayoffs;
