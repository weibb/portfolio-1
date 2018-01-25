import React, { Component } from 'react';
import logo from './logo.svg';
import { config } from './config.js';
import './App.css';
import { Entry } from './Entry.js';
import { Thumbnail } from './Thumbnail.js';
import { Portfolio } from './Portfolio.js';

const startingState = {
    config,
    entry: config.entries[config.entries.length-1],
    showEntry: false,
}

class App extends Component {
    constructor() {
        super();
        this.state = startingState;
        this.selectEntry = this.selectEntry.bind( this );
        this.hideEntry = this.hideEntry.bind( this );
        // this.state.items = [ this.state.pub ];
        // this.filter = this.filter.bind( this );
        // this.selectType = this.selectType.bind( this );
        // this.selectCategory = this.selectCategory.bind( this );
        // this.getSummary = this.getSummary.bind( this );
    }
    selectEntry(id) {
        this.setState({ entry: config.entries[id], showEntry: true });
    }
    hideEntry() {
        this.setState({ showEntry: false });
    }
  render() {
    return (
      <div className="App">
        <Portfolio state={this.state} selectEntry={this.selectEntry} />
        <Entry state={this.state} hideEntry={this.hideEntry} />
      </div>
    );
  }
}

export default App;
