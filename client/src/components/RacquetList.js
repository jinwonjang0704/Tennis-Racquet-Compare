import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Racquet = props => (
    <tr>
      <td id="names">{props.racquet.name}</td>
      <td>{props.racquet.headsize}</td>
      <td>{props.racquet.length}</td>
      <td>{props.racquet.weight}</td>
      <td>{props.racquet.swingweight}</td>
      <td>
        <Link to={"/edit/"+props.racquet._id}>edit</Link> | <a href="/" onClick={() => { props.deleteRacquet(props.racquet._id) }}>delete</a>
      </td>
    </tr>
  )


export default class RacquetList extends Component{
    constructor(props) {
        super(props);

        this.deleteRacquet = this.deleteRacquet.bind(this);

        this.state = {racquets: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/racquets/')
        .then(response => {
            this.setState({ racquets: response.data })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteRacquet(id) {
        axios.delete('http://localhost:5000/racquets/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          racquets: this.state.racquets.filter(el => el._id !== id)
         })
    }

    racquetList() {
        return this.state.racquets.map(currentracquet => {
          return <Racquet racquet={currentracquet} deleteRacquet={this.deleteRacquet} key={currentracquet._id}/>;
        })
      }    


    render(){
        return(
          <div>
            <nav>
            <label className="logo">{this.props.name}</label>
            <ul>
                <li>
                <Link to="/" className="menu">Home</Link>
                </li>
                <li>
                <Link to="/create" className="menu">Upload</Link>
                </li>
                <li>
                <Link to="/racquetlist" className="menu">Racquet List</Link>
                </li>
            </ul>
            </nav>

            <h3>Registered Racquets</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th class="list">Name</th>
                  <th class="list">Head Size (in^2)</th>
                  <th class="list">Length (in)</th>
                  <th class="list">Weight (gm)</th>
                  <th class="list">Swing Weight (kg*cm^2)</th>
                  <th class="list"></th>
                </tr>
              </thead>
              <tbody>
                { this.racquetList() }
              </tbody>
            </table>
          </div>
        )
    }
    }