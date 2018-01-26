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
        let className = '';
        className += entry.thumbnailShape || '';
        className += this.props.match ? ' thumbnail match ' : ' thumbnail no-match ';
        className += entry.color || '';
        let inner;
        if ( entry.title ){
            inner = <div className="thumbnail-content-holder">
                <img alt="" src={entry.thumbnail} />
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
