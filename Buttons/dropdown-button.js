/*
 * Tangible Style Guide
 * Copyright 2018 Freeman Co.
 *
 * # Dropdown Buttons
 *
 * Props to be passed:
 * ` options - array  | [["ItemName", Active?(True or False)], ...]
 * ` theme   - string | light or dark
 *
 * Call:
 * ` <ButtonDropdown
 *   options={[["OPTION 1", false], ["OPTION 2", false], ["OPTION 3", false], ["OPTION 4", false], ["OPTION 5", false], ["OPTION 6", false]]}
 *   theme=""></ButtonDropdown>
 */

import React, { Component } from "react";

class ButtonDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenuState: false,
      isExpanded: false,
      buttonID: Math.floor(Math.random() * (9999 - 1) + 1),
      buttonText: "BUTTON"
    };
  }

  componentDidMount() {
    this.dropdown.addEventListener("click", this.showMenu);
  }

  componentWillUnmount() {
    this.dropdown.removeEventListener("click", this.showMenu);
  }

  showMenu = event => {
    event.stopPropagation();
    this.setState({ showMenuState: true, isExpanded: true });
    window.addEventListener("click", this.closeMenu);
  };

  closeMenu = event => {
    this.setState({ showMenuState: false, isExpanded: false });
    window.removeEventListener("click", this.closeMenu);
  };

  updateButton = event => {
    this.state.buttonText = event.target.innerText;
    // this toggles the active class on the menu options
    for (let i = 0; i < this.props.options.length; i++) {
      if (this.props.options[i][0] == this.state.buttonText) {
        this.props.options[i][1] = true;
      } else {
        this.props.options[i][1] = false;
      }
    }
  };

  render() {
    return (
      <div>
        <button
          ref={elem => (this.dropdown = elem)}
          aria-haspopup="true"
          aria-expanded={this.state.isExpanded}
          aria-controls="dropdown-button"
          className={"btn btn-secondary dropdown-toggle " + this.props.theme}
          id={"dropdown-button" + this.state.buttonID}
          disabled={this.props.disabled}
        >
          {this.state.buttonText}
        </button>
        {this.state.showMenuState ? (
          <div
            role="menu"
            aria-live="polite"
            className={"dropdown-menu-tangible " + this.props.theme}
            id={"dropdown-button " + this.props.theme}
            onClick={this.updateButton}
          >
            {this.props.options.map(function(option, index) {
              if (option[1]) {
                return (
                  <button
                    className="dropdown-item dropdown-link current-selection"
                    key={index}
                  >
                    {option}
                  </button>
                );
              } else {
                return (
                  <button className="dropdown-item dropdown-link" key={index}>
                    {option}
                  </button>
                );
              }
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default ButtonDropdown;
