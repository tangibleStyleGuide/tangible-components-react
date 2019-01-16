/*
* Tangible Style Guide
* Copyright 2018 Freeman Co.
* 
* # Lists - One Icon
*
* Required: 
* ` Import  | import List from "./list-one-icon.js";
* 
* Props to be passed:
* ` theme   | light or dark
*
*/

import React, { Component } from "react";

import iconDeleteDark from "../../assets/images/iconDeleteDark.svg";
import iconDeleteLight from "../../assets/images/iconDeleteLight.svg";

class ListOneIcon extends Component {
    render() {
        return (

            <div role="list" className={"list-group" + " " + this.props.theme}>
                <div role="listitem" className="list-group-item d-inline-flex flex-nowrap">
                    <div className="d-flex justify-content-start">
                        <p className="my-auto">Sample Text</p>
                    </div>
                    <div className="w-100 d-flex justify-content-end">
                        <button className="icon icon-btn" aria-label="Delete">
                            <img src={(this.props.theme === "dark") ? iconDeleteLight : iconDeleteDark} onClick="" className="icon" />
                        </button>
                    </div>
                </div>
                <div role="listitem" className="list-group-item d-inline-flex flex-nowrap">
                    <div className="d-flex justify-content-start">
                        <p className="my-auto">Sample Text</p>
                    </div>
                    <div className="w-100 d-flex justify-content-end">
                        <button className="icon icon-btn" aria-label="Delete">
                            <img src={(this.props.theme === "dark") ? iconDeleteLight : iconDeleteDark} onClick="" className="icon" />
                        </button>
                    </div>
                </div>
                <div role="listitem" className="list-group-item d-inline-flex flex-nowrap">
                    <div className="d-flex justify-content-start">
                        <p className="my-auto">Sample Text</p>
                    </div>
                    <div className="w-100 d-flex justify-content-end">
                        <button className="icon icon-btn" aria-label="Delete">
                            <img src={(this.props.theme === "dark") ? iconDeleteLight : iconDeleteDark} onClick="" className="icon" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListOneIcon;