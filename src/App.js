import React, { Component } from 'react';
import logo from './logo.svg';
import { config } from './config.js';
import './App.css';
import { Entry } from './Entry.js';
import { Thumbnail } from './Thumbnail.js';
import { Portfolio } from './Portfolio.js';
import { Nav } from './Nav.js';
import { About } from './About.js';
import { Contact } from './Contact.js';

const startingState = {
    config,
    entry: config.entries[config.entries.length-1],
    showEntry: false,
    showAbout: false,
    showContact: false,
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
        this.selectCategory = this.selectCategory.bind( this );
        this.toggleAbout = this.toggleAbout.bind( this );
        this.toggleContact = this.toggleContact.bind( this );
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
    toggleAbout() {
        this.setState({ showAbout: !this.state.showAbout });
    }
    toggleContact() {
        this.setState({ showContact: !this.state.showContact });
    }
  render() {
    return (
      <div className="App">
        <Portfolio state={this.state} selectEntry={this.selectEntry} />
        <Nav state={this.state} selectCategory={this.selectCategory} toggleContact={this.toggleContact} toggleAbout={this.toggleAbout} />
        <Entry state={this.state} hideEntry={this.hideEntry} />
        <About state={this.state} toggleAbout={this.toggleAbout} />
        <Contact state={this.state} toggleContact={this.toggleContact} />
      </div>
    );
  }
}

export default App;
