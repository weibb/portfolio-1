import React, { Component } from 'react';
import logo from './logo.svg';
import { config } from './config.js';
import './App.css';
import { Entry } from './Entry.js';

const startingState = {
    entry: config.entries[config.entries.length-1],
    showEntry: true,
}

class App extends Component {
    constructor() {
        super();
        this.state = startingState;
        // this.state.items = [ this.state.pub ];
        // this.filter = this.filter.bind( this );
        // this.selectType = this.selectType.bind( this );
        // this.selectCategory = this.selectCategory.bind( this );
        // this.getSummary = this.getSummary.bind( this );
    }
  render() {
    return (
      <div className="App">
        <Entry state={this.state} />
      </div>
    );
  }
}

export default App;
