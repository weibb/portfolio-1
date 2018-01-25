import React, { Component } from 'react';
import headerFrame from './media/tablet_landscape.png';
import button_black from './media/nav/button_black.png';
import { Thumbnail } from './Thumbnail.js';

export class Portfolio extends Component {
    constructor( props ) {
        super( props );
        this.state = props.state;
        this.events = props.events;
        this.selectEntry = props.selectEntry;
    }

    render() {
        const entries = this.props.state.config.entries;
        let content;
        let unfilteredList = [];
        for (let i = 0; i < entries.length; i += 1) {
            unfilteredList.push(<Thumbnail selectEntry={this.selectEntry} state={this.props.state} id ={i} key={"thumbnail-" + i} />)
        }
        console.log('Entries: ' + unfilteredList);
        content = unfilteredList;
        // const thumbnails = this.props.state.config.entries.map( thumbnail, i =>(
        //     <Thumbnail id ={i} />
        // ))
        return (
          <div className="portfolio-master">
              {content}
          </div>
        );
    }
};
