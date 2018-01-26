import React, { Component } from 'react';

export class Thumbnail extends Component {
    constructor( props ) {
        super( props );
        this.props = props;
        this.selectEntry = props.selectEntry;
    }
    render() {
        const state = this.props.state;
        let entry = state.config.entries[this.props.id];
        let tagMatch = false;
        // if no tag is selected (no value of true exists in tags object), everything is a match
        if (entry.tags && Object.values(state.tags).indexOf(true) === -1 ) {
            tagMatch = true;
        }
        // otherwise, check to see if any value of entry.tags matches any true value of state.tags
        else if (entry.tags) {
            for (let j = 0; j < entry.tags.length; j += 1) {
                console.log(entry.tags[j]);
                if(state.tags[entry.tags[j]]) {
                    tagMatch = true;
                    break;
                }
            }
        }
        let className = '';
        className += entry.thumbnailShape || '';
        className += tagMatch ? ' thumbnail match ' : ' thumbnail no-match ';
        className += entry.color || '';
        let inner;
        if ( entry.title ){
            inner = <div className="thumbnail-content-holder">
                <img alt="" src={entry.thumbnail} className="thumbnail-preview" />
                <button
                    onClick={( e ) => {
                        const self = this;
                        this.selectEntry(this.props.id);

                    }}
                >
                </button>
            </div>
        }
        return (
            <div className={className}>
                {inner}
            </div>
        );
    }
};
