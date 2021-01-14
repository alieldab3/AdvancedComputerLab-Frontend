import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './viewSchedule.css';


class viewSchedule extends Component{
    state ={
        Saturday:{
            First:"",
            Second:"",
            Third:"",
            Fourth:"",
            Fifth:"",
            Sixth:"",
            Seventh:"",
            Eighth:""
        },
        Sunday:{
            First:"",
            Second:"",
            Third:"",
            Fourth:"",
            Fifth:"",
            Sixth:"",
            Seventh:"",
            Eighth:""
        },
        Monday:{
            First:"",
            Second:"",
            Third:"",
            Fourth:"",
            Fifth:"",
            Sixth:"",
            Seventh:"",
            Eighth:""
        },
        Tuesday:{
            First:"",
            Second:"",
            Third:"",
            Fourth:"",
            Fifth:"",
            Sixth:"",
            Seventh:"",
            Eighth:""
        },
        Wednesday:{
            First:"",
            Second:"",
            Third:"",
            Fourth:"",
            Fifth:"",
            Sixth:"",
            Seventh:"",
            Eighth:""
        },
        Thursday:{
            First:"",
            Second:"",
            Third:"",
            Fourth:"",
            Fifth:"",
            Sixth:"",
            Seventh:"",
            Eighth:""
        },
        Friday:{
            First:"",
            Second:"",
            Third:"",
            Fourth:"",
            Fifth:"",
            Sixth:"",
            Seventh:"",
            Eighth:""
        }
    }


    componentDidMount() {
        
      }

    render(){
        return(
            <div className="main">
                <table class="table table-striped">
                <thead>
                    <tr class = "fathy_Row">
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Second</th>
                    <th scope="col">Third</th>
                    <th scope="col">Fourth</th>
                    <th scope="col">Fifth</th>
                    <th scope="col">Sixth</th>
                    <th scope="col">Seventh</th>
                    <th scope="col">Eighth</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Saturday</th>
                    <td>{this.state.Saturday.First}</td>
                    <td>{this.state.Saturday.Second}</td>
                    <td>{this.state.Saturday.Third}</td>
                    <td>{this.state.Saturday.Fourth}</td>
                    <td>{this.state.Saturday.Fifth}</td>
                    <td>{this.state.Saturday.Sixth}</td>
                    <td>{this.state.Saturday.Seventh}</td>
                    <td>{this.state.Saturday.Eighth}</td>
                    </tr>
                    <tr>
                    <th scope="row">Sunday</th>
                    <td>{this.state.Sunday.First}</td>
                    <td>{this.state.Sunday.Second}</td>
                    <td>{this.state.Sunday.Third}</td>
                    <td>{this.state.Sunday.Fourth}</td>
                    <td>{this.state.Sunday.Fifth}</td>
                    <td>{this.state.Sunday.Sixth}</td>
                    <td>{this.state.Sunday.Seventh}</td>
                    <td>{this.state.Sunday.Eighth}</td>
                    </tr>
                    <tr>
                    <th scope="row">Monday</th>
                    <td>{this.state.Monday.First}</td>
                    <td>{this.state.Monday.Second}</td>
                    <td>{this.state.Monday.Third}</td>
                    <td>{this.state.Monday.Fourth}</td>
                    <td>{this.state.Monday.Fifth}</td>
                    <td>{this.state.Monday.Sixth}</td>
                    <td>{this.state.Monday.Seventh}</td>
                    <td>{this.state.Monday.Eighth}</td>
                    </tr>
                    <tr>
                    <th scope="row">Tuesday</th>
                    <td>{this.state.Tuesday.First}</td>
                    <td>{this.state.Tuesday.Second}</td>
                    <td>{this.state.Tuesday.Third}</td>
                    <td>{this.state.Tuesday.Fourth}</td>
                    <td>{this.state.Tuesday.Fifth}</td>
                    <td>{this.state.Tuesday.Sixth}</td>
                    <td>{this.state.Tuesday.Seventh}</td>
                    <td>{this.state.Tuesday.Eighth}</td>
                    </tr>
                    <tr>
                    <th scope="row">Wednesday</th>
                    <td>{this.state.Wednesday.First}</td>
                    <td>{this.state.Wednesday.Second}</td>
                    <td>{this.state.Wednesday.Third}</td>
                    <td>{this.state.Wednesday.Fourth}</td>
                    <td>{this.state.Wednesday.Fifth}</td>
                    <td>{this.state.Wednesday.Sixth}</td>
                    <td>{this.state.Wednesday.Seventh}</td>
                    <td>{this.state.Wednesday.Eighth}</td>
                    </tr>
                    <tr>
                    <th scope="row">Thursday</th>
                    <td>{this.state.Thursday.First}</td>
                    <td>{this.state.Thursday.Second}</td>
                    <td>{this.state.Thursday.Third}</td>
                    <td>{this.state.Thursday.Fourth}</td>
                    <td>{this.state.Thursday.Fifth}</td>
                    <td>{this.state.Thursday.Sixth}</td>
                    <td>{this.state.Thursday.Seventh}</td>
                    <td>{this.state.Thursday.Eighth}</td>
                    </tr>
                    <tr>
                    <th scope="row">Friday</th>
                    <td>{this.state.Friday.First}</td>
                    <td>{this.state.Friday.Second}</td>
                    <td>{this.state.Friday.Third}</td>
                    <td>{this.state.Friday.Fourth}</td>
                    <td>{this.state.Friday.Fifth}</td>
                    <td>{this.state.Friday.Sixth}</td>
                    <td>{this.state.Friday.Seventh}</td>
                    <td>{this.state.Friday.Eighth}</td>
                    </tr>

                </tbody>
                </table>
            </div>
        )}
    
}

export default viewSchedule;
