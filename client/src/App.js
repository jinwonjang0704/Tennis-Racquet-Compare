import React, { Component } from 'react';
import { HashRouter as Router, Route} from "react-router-dom";
import Subject from "./components/Subject";
import EditRacquet from "./components/EditRacquet";
import CreateRacquet from "./components/CreateRacquet";
import RacquetList from "./components/RacquetList";
import './App.css';
import './style.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        name:'Tennis Racquet Comparison Tool',
        statement1:'Compare the Newest Tennis Racquets!',
        statement2:'Select racquets to compare'
    }
  }
  render(){
    return (
      <Router>
        <Route path="/" exact component={() => <Subject name={this.state.name} statement1={this.state.statement1} statement2={this.state.statement2}/>} />
        <Route path="/edit/:id" component={EditRacquet} />
        <Route path="/create" component={() => <CreateRacquet name={this.state.name}/> } />
        <Route path="/racquetlist" component={() => <RacquetList name={this.state.name}/> } />
      </Router>
    );
  }
}

export default App;
