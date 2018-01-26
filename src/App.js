import React, { Component } from 'react';
import logo from './logo.svg';
import { config } from './config.js';
import './App.css';
import { Entry } from './Entry.js';
import { Thumbnail } from './Thumbnail.js';
import { Portfolio } from './Portfolio.js';
import { Nav } from './Nav.js';

const startingState = {
    config,
    entry: config.entries[config.entries.length-1],
    showEntry: false,
    tags: {},
}

class App extends Component {
    constructor() {
        super();
        this.state = startingState;
        for ( let i = 0; i < config.categories.length; i += 1) {
            this.state.tags[config.categories[i]] = false;
        }
        console.log(this.state);
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
    selectCategory(tag) {
        const newTags = this.state.tags;
        newTags[tag] = !newTags[tag];
        this.setState(newTags);
        console.log(this.state);
    }
    hideEntry() {
        this.setState({ showEntry: false });
    }
  render() {
    return (
      <div className="App">
        <Portfolio state={this.state} selectEntry={this.selectEntry} />
        <Nav state={this.state} selectCategory={this.selectCategory} />
        <Entry state={this.state} hideEntry={this.hideEntry} />
      </div>
    );
  }
}

export default App;
