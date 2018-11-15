/*
* Tangible Style Guide
* Copyright 2018 Freeman Co.
* 
* # Lists - Avatar Icon
*
* Required: 
* ` Import  | import List from "./list-avatar.js";
* 
* Props to be passed:
* ` theme   | light or dark
*
*/

import React, { Component } from "react";

import iconDeleteDark from "../../assets/images/iconDeleteDark.svg";
import iconDocumentDark from "../../assets/images/iconDocumentDark.svg";
import iconUserDark from "../../assets/images/iconUserDark.svg";
import iconDocumentLight from "../../assets/images/iconDocumentLight.svg";
import iconUserLight from "../../assets/images/iconUserLight.svg";
import iconDeleteLight from "../../assets/images/iconDeleteLight.svg";

class ListAvatar extends Component {
    render() {
        return (
            <div role="list" className={"list-group" + " " + this.props.theme}>
                <div role="listitem" className="list-group-item d-inline-flex flex-nowrap">
                    <div className="d-flex justify-content-start">
                        <button className="icon icon-btn" aria-label="User">
                            <img src={(this.props.theme == "dark") ? iconUserLight : iconUserDark} onClick="" className="icon" />
                        </button>
                        <p className="my-auto">Sample Text</p>
                    </div>
                    <div className="w-100 d-flex justify-content-end">
                        <button className="icon icon-btn" aria-label="Open File">
                            <img src={(this.props.theme == "dark") ? iconDocumentLight : iconDocumentDark} onClick="" className="icon" />
                        </button>
                        <button className="icon icon-btn" aria-label="Delete">
                            <img src={(this.props.theme == "dark") ? iconDeleteLight : iconDeleteDark} onClick="" className="icon" />
                        </button>
                    </div>
                </div>
                <div role="listitem" className="list-group-item d-inline-flex flex-nowrap">
                    <div className="d-flex justify-content-start">
                        <button className="icon icon-btn" aria-label="User">
                            <img src={(this.props.theme == "dark") ? iconUserLight : iconUserDark} onClick="" className="icon" />
                        </button>
                        <p className="my-auto">Sample Text</p>
                    </div>
                    <div className="w-100 d-flex justify-content-end">
                        <button className="icon icon-btn" aria-label="Open File">
                            <img src={(this.props.theme == "dark") ? iconDocumentLight : iconDocumentDark} onClick="" className="icon" />
                        </button>
                        <button className="icon icon-btn" aria-label="Delete">
                            <img src={(this.props.theme == "dark") ? iconDeleteLight : iconDeleteDark} onClick="" className="icon" />
                        </button>
                    </div>
                </div>
                <div role="listitem" className="list-group-item d-inline-flex flex-nowrap">
                    <div className="d-flex justify-content-start">
                        <button className="icon icon-btn" aria-label="User">
                            <img src={(this.props.theme == "dark") ? iconUserLight : iconUserDark} onClick="" className="icon" />
                        </button>
                        <p className="my-auto">Sample Text</p>
                    </div>
                    <div className="w-100 d-flex justify-content-end">
                        <button className="icon icon-btn" aria-label="Open File">
                            <img src={(this.props.theme == "dark") ? iconDocumentLight : iconDocumentDark} onClick="" className="icon" />
                        </button>
                        <button className="icon icon-btn" aria-label="Delete">
                            <img src={(this.props.theme == "dark") ? iconDeleteLight : iconDeleteDark} onClick="" className="icon" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

//temporary
export default ListAvatar;

