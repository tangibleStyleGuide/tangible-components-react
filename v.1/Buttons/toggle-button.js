/*
* Tangible Style Guide
* Copyright 2018 Freeman Co.
*
* # Toggle Buttons
*
* Props to be passed:
* ` options - array  | [["ItemName", Active?(True or False)], ...]
* ` theme   - string | light or dark
*
* Call: 
* ` <ToggleButton options={[[]]} theme=""></ToggleButton>
*/

import React, { Component } from "react";

import thumbUpDark from "../../assets/images/iconThumbsUpDark.svg";

class ToggleButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleButtonAriaState: "false",
            toggleButtonState: "btn-toggle-off",
        };
    }

    componentDidMount() {
        this.toggle.addEventListener("click", this.toggleButton);
    }

    componentWillUnmount() {
        this.toggle.removeEventListener("click", this.toggleButton);
    }

    toggleButton = () => {
        this.state.toggleButtonState === "btn-toggle-off" ? this.setState({ toggleButtonState: "btn-toggle-on" }) : this.setState({ toggleButtonState: "btn-toggle-off" });
        this.state.toggleButtonAriaState === "false" ? this.setState({ toggleButtonAriaState: "true" }) : this.setState({ toggleButtonAriaState: "false" });
    }

    render() {
        return (
            <button
                ref={elem => this.toggle = elem}
                role="button" aria-pressed={this.state.toggleButtonAriaState}
                className={"icon-toggle " + this.state.toggleButtonState + " " + this.props.theme}
                onClick={() => { }/* add hook here */}>
                <img src={thumbUpDark} className="" alt="" />
            </button>
        );
    }
}

export default ToggleButton;