/*
* Tangible Style Guide
* Copyright 2018 Freeman Co.
* 
* # Lists
*
* Required: 
* ` Import  | import List from "./list.js";
* 
* Props to be passed:
* ` theme   | light or dark
*
*/

import React, { Component } from "react";

class List extends Component {
    render() {
        return (
            <div className={"list-group" + " " + this.props.theme}>
                <div className="list-group-item d-inline-flex flex-nowrap">
                    <div className="d-flex justify-content-start">
                        <p className="my-auto">Sample Text</p>
                    </div>
                </div>
                <div className="list-group-item d-inline-flex flex-nowrap">
                    <div className="d-flex justify-content-start">
                        <p className="my-auto">Sample Text</p>
                    </div>
                </div>
                <div className="list-group-item d-inline-flex flex-nowrap">
                    <div className="d-flex justify-content-start">
                        <p className="my-auto">Sample Text</p>
                    </div>
                </div>
            </div>
        );
    }
}

//temporary
export default List;

