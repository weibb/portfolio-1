import React, { Component } from 'react';

export class Contact extends Component {
    constructor( props ) {
        super( props );
        this.state = props.state;
        this.events = props.events;
        this.toggleContact = props.toggleContact;
    }

    render() {
        const config = this.state.config;
        const contactVisible = this.props.state.showContact ? "contact visible" : "contact hidden";
        const title = <div id="contact-title-holder"><h1  id="contact-title">{config.contact.title}</h1></div>
        const description = <div id="contact-description-holder"><p  id="contact-description">{config.contact.description}</p></div>
        return (
            <div className={contactVisible} id="contact-master">
                <button id="contact-back"
                    onClick={( e ) => {
                        this.toggleContact();
                    }}
                > Back
                </button>
                {title}
                {description}
            </div>
        );
    }
};
