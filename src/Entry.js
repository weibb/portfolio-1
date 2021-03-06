import React, { Component } from 'react';
import headerFrame from './media/tablet_landscape.png';
import button_black from './media/nav/button_black.png';

export class Entry extends Component {
    constructor( props ) {
        super( props );
        this.state = props.state;
        this.events = props.events;
        this.hideEntry = props.hideEntry;
    }

    render() {
        const entry = this.props.state.entry;
        const entryVisible = this.props.state.showEntry ? "entry visible" : "entry hidden";
        const gallery = [];
        for(let i = 0; i < entry.gallery.length; i += 1){
            let galleryElements = [];
            if(entry.gallery[i].type==='video'){
                galleryElements.push(<video className="gallery gallery-video" key={i} alt="gallery video" autoPlay="autoPlay" loop="loop"><source src={ entry.gallery[i].src } /></video>);
            }
            else {
                galleryElements.push(<img className="gallery gallery-image" key={i} src={entry.gallery[i].src} />);
            }
            if( entry.gallery[i].description ){
                galleryElements.push(<p key={"gallery-description" + i} className="gallery-description">{entry.gallery[i].description}</p>)
            }
            gallery.push(<div key={i + "-item-holder"} className="gallery-item-holder">{galleryElements}</div>);
        }
        console.log(gallery);
        if ( this.state.showEntry === true) {
            // for(let i = 0; i < this.state.entry.gallery.length; i += 1){
            //     const img[i] = import './media/' + this.state.entry.folder + i + '.png';
            // }
        }
        const descriptionButtons=[];
        if ( entry.demo ) {
            const demo = <div id="demo" key="demo-holder"><img src={button_black} /><button key="demo" className="description-button" href={entry.demo}> Working Demo </button></div>
            descriptionButtons.push(demo);
        }
        if ( entry.github ) {
            const github = <div  id="github" key="github-holder"><img src={button_black} /><a  href={entry.github}><button key="github" className="description-button"> View on GitHub </button></a></div>
            descriptionButtons.push(github);
        }
        let buttonHolder;
        if (descriptionButtons.length > 0) {
            buttonHolder = <div id="button-holder">{descriptionButtons}</div>
        }
        let header;
        if(entry.headerType==='video'){
            header = <video className={entry.headerClass} alt="header image" autoPlay="autoPlay" loop="loop"><source src={ entry.headerSrc } /></video>
        }
        else {
            header = <img src={ entry.headerSrc } className={entry.headerClass} alt="header image"  />
        }
        const arrowClass = "divider-arrow " + entry.color;
        //const headerImg = import this.state.entry.headerSrc;
        return (
            <div className={entryVisible} id="entry-master">
                <div id="entry-header" className={entry.color}>
                    <button id="entry-back"
                        onClick={( e ) => {
                            this.hideEntry();
                        }}
                    > Back
                    </button>
                    <div className="entry" id="entry-header-holder">
                        <img src={ entry.headerFrame } id="entry-frame" alt="device frame" />
                        {header}
                    </div>
                    <div id="header-arrow" className = {arrowClass}/>
                    <h1 id="entry-header-text"> {entry.title} </h1>
                </div>
                <div id="entry-description">
                    <h3>ROLE</h3>
                    <p className="description">{entry.role}</p>
                    <h3>PROJECT</h3>
                    <p className="description">{entry.project}</p>
                    {buttonHolder}
                    <div id="description-arrow" className = "divider-arrow" />
                </div>
                <div id="entry-gallery" className={entry.color}>
                    {gallery}
                </div>
            </div>
        );
    }
};
