import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class EditRacquet extends Component{
    constructor(props) {
        super(props);
    
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLength = this.onChangeLength.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeHeadsize = this.onChangeHeadsize.bind(this);
        this.onChangeSwingWeight = this.onChangeSwingWeight.bind(this);
        this.onChangeBalancePoint = this.onChangeBalancePoint.bind(this);
        this.onChangeStringPattern = this.onChangeStringPattern.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          name: '',
          headsize: 0,
          length: 0,
          weight: 0,
          swingweight: 0,
          balancepoint: '0',
          stringpattern:'0',
          image: '',
        }
      }
    
      componentDidMount() {
        axios.get('/racquets/'+this.props.match.params.id)
          .then(response => {
            this.setState({
              name: response.data.name,
              headsize: response.data.headsize,
              length: response.data.length,
              weight: response.data.weight,
              swingweight: response.data.swingweight,
              balancepoint: response.data.balancepoint,
              stringpattern: response.data.stringpattern,
              image: response.data.image,
            })
          })
          .catch(function (error) {
            console.log(error);
          })
    
      }
    
      onChangeName(e) {
        this.setState({
          name: e.target.value
        })
      }
    
      onChangeHeadsize(e) {
        this.setState({
          headsize: e.target.value
        })
      }
    
      onChangeLength(e) {
        this.setState({
          length: e.target.value
        })
      }
    
      onChangeWeight(e) {
        this.setState({
          weight: e.target.value
        })
      }
      onChangeSwingWeight(e) {
        this.setState({
          swingweight: e.target.value
        })
      }
      onChangeBalancePoint(e) {
        this.setState({
          balancepoint: e.target.value
        })
     }
      onChangeStringPattern(e) {
          this.setState({
            stringpattern: e.target.value
          })
      }
      onChangeImage(e) {
        this.setState({
          image: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const racquet = {
          name: this.state.name,
          headsize: this.state.headsize,
          length: this.state.length,
          weight: this.state.weight,
          swingweight: this.state.swingweight,
          balancepoint: this.state.balancepoint,
          stringpattern: this.state.stringpattern,
          image: this.state.image,
        }
    
        console.log(racquet);
    
        axios.post('/racquets/update/' + this.props.match.params.id, racquet)
          .then(res => console.log(res.data));
    
        window.location = '/';
      }


    
render(){
    return(
        <div>
        <nav>
          <label className="logo">Tennis Racquet Comparison Tool</label>
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
        <h3>Edit Racquet</h3>
        <div class="input-box">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
          </div>
          <div className="form-group">
          <label>Racquet Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
          </div>
        <div className="form-group">
          <label>Head Size (in^2): </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.headsize}
              onChange={this.onChangeHeadsize}
              />
        </div>
        <div className="form-group">
          <label>Length (in): </label>
          <input
              type="text"
              className="form-control"
              value={this.state.length}
              onChange={this.onChangeLength}
              />
        </div>
        <div className="form-group">
          <label>Weight (oz): </label>
          <input
              type="text"
              className="form-control"
              value={this.state.weight}
              onChange={this.onChangeWeight}
              />
        </div>
        <div className="form-group">
          <label>Swing Weight (kg*cm^2): </label>
          <input
              type="text"
              className="form-control"
              value={this.state.swingweight}
              onChange={this.onChangeSwingWeight}
              />
        </div>
        <div className="form-group">
          <label>Balance Point: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.balancepoint}
              onChange={this.onChangeBalancePoint}
              />
        </div>
        <div className="form-group">
          <label>String Pattern: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.stringpattern}
              onChange={this.onChangeStringPattern}
              />
        </div>
        <div className="form-group">
          <label>Image Url: </label>
          <input
              type="text"
              className="form-control"
              value={this.state.image}
              onChange={this.onChangeImage}
              />
        </div>
  
          <div className="form-group">
            <input type="submit" value="Edit Racquet" className="btn btn-primary" />
          </div>
        </form>
      </div>
      </div>
    )
}
}