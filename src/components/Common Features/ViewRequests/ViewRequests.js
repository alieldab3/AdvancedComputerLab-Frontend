import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './ViewRequests.css';


class ViewRequests extends Component{
    state ={
        Replacements : [],
        SlotLinking : [],
        
    }


    componentDidMount() {
        
      }

    render(){

        return(
            <div class = "main">
            

            <table class="table">
            <thead>
                <tr class = "fathy_row">
                <th scope="col">Id</th>
                <th scope="col">Request Type Type</th>
                <th scope="col">Requested Day </th>
                <th scope="col">Cancel</th>
                </tr>
            </thead>
            <tbody>
                <tr class = "fathy_row">
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>

                </tr>
                <tr class = "fathy_row">
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr class = "fathy_row">
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </table>
            </div>
        )}
    
}


export default ViewRequests;
