import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './viewstaffmissingdays.css';

<<<<<<< HEAD
const viewstaffmissingdays =() =>{
=======
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
      let a=document.getElementById("uniqueID").value;
      if(a){
    axios.get('http://localhost:5000/viewAllMissingDays/:month" component={UserPage}', {
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
>>>>>>> parent of 50f06d7... ALL AUTH DONE HR
    return(
        <div className="main">
            <h2>viewstaffmissingdays</h2>
            <p>This is viewstaffmissingdays</p>
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


export default viewstaffmissingdays;
