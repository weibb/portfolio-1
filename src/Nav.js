import React, { Component } from 'react';
import { config } from './config';

export class Nav extends Component {
    constructor( props ) {
        super( props );
        this.filter = props.filter;
        this.state = props.state;
    }

    render() {
        const categoryMatch = config.categories.map((category, i) => (
            category === this.props.category ? "category selected" : "category"
        ));
        return (
            <div className="sidebar" id="profiler">
                <div className="leftside display-pic">
                    <img alt='focus image' src={config.author.image} />
                </div>
                <div className="leftside person wordwrap">
                    <h2>{config.author.displayName}</h2>
                    <h3>{config.author.degrees}</h3>
                    <h4>{config.author.institution}</h4>
                </div>
                <ul className="leftside tags">
                    <li key="title0" className="tagsTitle"> tags </li>
                    {config.categories.map((category, i) => (
                        <li key={i} className="tagsItem">
                            <button
                                className={categoryMatch[i]}
                                onClick={( e ) => {
                                    console.log( category );
                                    this.selectCategory( category );
                                }}
                            >
                                { category }
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

        );
    }
};
