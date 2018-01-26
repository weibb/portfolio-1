import React, { Component } from 'react';
import { config } from './config';

export class Nav extends Component {
    constructor( props ) {
        super( props );
        this.filter = props.filter;
        this.state = props.state;
        this.selectCategory = props.selectCategory;
        this.toggleAbout = props.toggleAbout;
        this.toggleContact = props.toggleContact;
    }

    render() {
        const categoryMatch = config.categories.map((category, i) => (
            this.props.state.tags[category] ? "category selected" : "category"
        ));
        return (
            <div id="nav">
                <img src={config.logo} id="logo" />
                <ul id="tags-list">
                    {config.categories.map((category, i) => (
                        <li key={i} className="tagsItem">
                            <button
                                className={categoryMatch[i]}
                                onClick={( e ) => {
                                    this.selectCategory( category );
                                }}
                            >
                                { category }
                            </button>
                        </li>
                    ))}
                    <li key="button-about">
                        <button className="about"
                            onClick={( e ) => {
                                this.toggleAbout();
                            }}
                        > About
                        </button>
                    </li>
                    <li key="button-contact">
                        <button className="contact"
                            onClick={( e ) => {
                                this.toggleContact();
                            }}
                        > Contact
                        </button>
                    </li>
                </ul>
            </div>

        );
    }
};
