/*
* Tangible Style Guide
* Copyright 2018 Freeman Co.
* 
* # Cards
*
* Required: 
* ` Import | import Card from "./card.js";
* 
* Props to be passed:
* ` theme | light or dark
* ` This file is meant to be customized internally
*
* Call: 
* ` <Card></Card>
*/

import React, { Component } from "react";

import thumbUpDark from "../../assets/images/iconThumbsUpDark.svg";
import thumbUpLight from "../../assets/images/iconThumbsUpLight.svg";

class Card extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={"card " + this.props.theme} role="group" aria-label="card">
                <div className="card-header">
                    <h4 className="card-title">Tangible Card</h4>
                    <p className="card-subtitle">Sample subtitle</p>
                </div>
                <div className="card-body">
                    <img className="card-img" src="https://www.lockportny.gov/wp-content/uploads/2018/04/placeholder.png" alt="placeholder image" ></img>
                    <p className="card-text">Sample supporting text</p>
                </div>
                <div className="card-footer">
                    <button className="icon-btn" aria-label="">
                        <img src={(this.props.theme == "dark") ? thumbUpLight : thumbUpDark} onClick="" className="icon" />
                    </button>	
                    <button className="btn btn-primary float-right">GO</button> 
                </div>
            </div>
        );
    }
}

export default Card