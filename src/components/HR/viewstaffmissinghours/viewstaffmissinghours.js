import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './viewstaffmissinghours.css';

<<<<<<< HEAD
const viewstaffmissinghours =() =>{
=======
const success = () => {
    
    message.success('member id added successfully plz press view all with missing hours');
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
    
    
    class viewstaffmissinghours extends Component{
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
    axios.get('http://localhost:5000/viewAllMissingHours/:month" component={UserPage}', {
        params:{
            month:a
        }
       
    },{withCredentials:true})
          .then(function (response) {
            console.log(response.data);
     
           success()
           console.log(response.data)

           
      
  response.data.forEach(element =>{  
      element.Days+=5;
   data1.push({id:element.id,name:element.name,missedhours:element.Days});
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
            <h2>viewstaffmissinghours</h2>
            <p>This is viewstaffmissinghours</p>
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


export default viewstaffmissinghours;
