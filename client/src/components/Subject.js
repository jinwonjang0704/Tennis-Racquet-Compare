import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Subject extends Component {
      constructor(props) {
        super(props);
        
        this.onChangeLeftGrid = this.onChangeLeftGrid.bind(this);
        this.lists1 = this.lists1.bind(this);
        this.onChangeRightGrid = this.onChangeRightGrid.bind(this);

        var displayimage = 'https://media.istockphoto.com/vectors/tennis-icon-on-white-background-vector-id1051131134?k=6&m=1051131134&s=612x612&w=0&h=URXCpGkGir7cAooRQWAfIcnQgga6PbGMZlqaZ4cA2PI=';

        this.state = {
            lname: 'Racquet 1  ▼',
            lheadsize: 0,
            llength: 0,
            lweight: 0,
            lswingweight: 0,
            limage: displayimage,

            rname: 'Racquet 2  ▼',
            rheadsize: 0,
            rlength: 0,
            rweight: 0,
            rswingweight: 0,
            rimage: displayimage,

            racquets: []
        }
      }

      componentDidMount() {
        axios.get('/racquets/')
          .then(response => {
            this.setState({ racquets: response.data })
            console.log(this.state.racquets.length);
          })
          .catch((error) => {
            console.log(error);
          })
      }

      onChangeRightGrid(event){
        var data = this.state.racquets;
        var i = event.target.value;
        if(i == -1){
          this.setState({
            rname: 'Racquet 1',
            rheadsize: 0,
            rlength: 0,
            rweight: 0,
            rswingweight: 0,
            rimage: 'https://media.istockphoto.com/vectors/tennis-icon-on-white-background-vector-id1051131134?k=6&m=1051131134&s=612x612&w=0&h=URXCpGkGir7cAooRQWAfIcnQgga6PbGMZlqaZ4cA2PI=',
          })
        }
        else{
          this.setState({
            rname: data[i].name,
            rheadsize: data[i].headsize,
            rlength: data[i].length,
            rweight: data[i].weight,
            rswingweight: data[i].swingweight,
            rimage: data[i].image,
          });
        }
      }

      onChangeLeftGrid(event){
        var data = this.state.racquets;
        var i = event.target.value;
        if(i == -1){
          this.setState({
            lname: 'Racquet 1',
            lheadsize: 0,
            llength: 0,
            lweight: 0,
            lswingweight: 0,
            limage: 'https://media.istockphoto.com/vectors/tennis-icon-on-white-background-vector-id1051131134?k=6&m=1051131134&s=612x612&w=0&h=URXCpGkGir7cAooRQWAfIcnQgga6PbGMZlqaZ4cA2PI=',
          })
        }
        else{
          this.setState({
            lname: data[i].name,
            lheadsize: data[i].headsize,
            llength: data[i].length,
            lweight: data[i].weight,
            lswingweight: data[i].swingweight,
            limage: data[i].image,
          });
        }
      }

      lists1(data){
        var arr = [];
        arr.push(<option key={-1} value={-1} >Select Racquet</option>)
        for (let i=0; i<data.length;i++){
          arr.push(<option key={i} value={i}>{data[i].name}</option>)
        }
        return arr;
      }
      lists2(data){
        var arr = [];
        arr.push(<option key={-1} value={-1} >Select Racquet</option>)
        for (let i=0; i<data.length;i++){
          arr.push(<option key={i} value={i}>{data[i].name}</option>)
        }
        return arr;
      }


    
  
    render(){

      var lists1 = [];
      var lists2 = [];
      var data = this.state.racquets;
      for(let index = 0; index < data.length; index++){
        lists1.push(<a key={index} href="/" onClick={
          (e) => this.onChangeLeftGrid(index, data, e)
        }>{data[index].name}</a>)

        lists2.push(<a key={index} href="/" onClick={
          (e) => this.onChangeLeftGrid(index, data, e)
        }>{data[index].name}</a>)
      }

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
         <div className="container">
          <h1>{this.props.statement1}</h1>
         </div>
         <div className="container" id="secondbar">
           <h2 id="main">{this.props.statement2}</h2>
         </div>
        <div className="grid-container">
          <div className="grid-item" id="menu">

           <select className="dropdownbutton" onChange={this.onChangeLeftGrid}>
              {this.lists1(data)}
           </select>

          </div>
          <div className="grid-item" id="menu">
            <select className="dropdownbutton" onChange={this.onChangeRightGrid}>
              {this.lists2(data)}
            </select>
          </div>
          <div className="grid-item">
            <img src={this.state.limage} alt="No image" />
          </div>

          <div className="grid-item">
            <img src={this.state.rimage} alt="No image" />
          </div>

          <div className="grid-item">
            <table className="table">
              <tbody>
              <tr>
                <th>Head Size (in^2)</th>
                <td id="ltd11">{this.state.lheadsize}</td>
              </tr>
              <tr>
                <th>Length (in)</th>
                <td id="ltd12">{this.state.llength}</td>
              </tr>
              <tr>
                <th>Weight (oz)</th>
                <td id="ltd13">{this.state.lweight}</td>
              </tr>
              <tr>
                <th>Swing Weight (kg*cm^2)</th>
                <td id="ltd14">{this.state.lswingweight}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="grid-item">
            <table className="table">
            <tbody>
              <tr>
                <th>Head Size (in^2)</th>
                <td id="rtd11">{this.state.rheadsize}</td>
              </tr>
              <tr>
                <th>Length (in)</th>
                <td id="rtd12">{this.state.rlength}</td>
              </tr>
              <tr>
                <th>Weight (oz)</th>
                <td id="rtd13">{this.state.rweight}</td>
              </tr>
              <tr>
                <th>Swing Weight (kg*cm^2)</th>
                <td id="rtd15">{this.state.rswingweight}</td>
              </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div> 
      );
    }
  }

  export default Subject;