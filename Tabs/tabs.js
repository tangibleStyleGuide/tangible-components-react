import React, { Component } from "react";

import arrowIconLeft from "../../assets/images/iconChevronLeftDark.svg";
import arrowIconRight from "../../assets/images/iconChevronRightDark.svg";
import arrowIconLeftLight from "../../assets/images/iconChevronLeftLight.svg";
import arrowIconRightLight from "../../assets/images/iconChevronRightLight.svg";

class Tab extends Component {
  constructor(props) {
    super(props);
    this.tabRef = React.createRef();

    this.state = {
      leftIconDisplay: "d-none",
      rightIconDisplay: "",
      navContainerActive: "",
      navScrollWidth: 0,
      navLeftScroll: 0
    };
  }

  componentDidMount() {
    const tempIDVar = this.tabRef;
    this.setState({
      navScrollWidth: tempIDVar.scrollWidth - tempIDVar.offsetWidth,
      navLeftScroll: tempIDVar.scrollLeft
    });
    this.tabRef.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const tempIDVar = this.tabRef;
    this.setState({
      navLeftScroll: tempIDVar.scrollLeft,
      navScrollWidth: tempIDVar.scrollWidth - tempIDVar.offsetWidth
    });
    this.updateClasses();
  };

  updateClasses = () => {
    if (this.state.navLeftScroll > 0) {
      this.setState({
        leftIconDisplay: "",
        rightIconDisplay: "",
        navContainerActive: "active"
      });
    }
    if (this.state.navLeftScroll === this.state.navScrollWidth) {
      this.setState({
        leftIconDisplay: "",
        rightIconDisplay: "d-none",
        navContainerActive: ""
      });
    }
    if (this.state.navLeftScroll === 0) {
      this.setState({
        leftIconDisplay: "d-none",
        rightIconDisplay: "",
        navContainerActive: ""
      });
    }
    this.forceUpdate();
  };

  toggleTabActive = e => {
    const li_elements = this.tabRef.childNodes;

    // iterates through all list items and toggles active classes
    for (var i = 0, len = li_elements.length; i < len; i++) {
      if (li_elements[i].firstChild.classList.contains("active")) {
        li_elements[i].firstChild.classList.toggle("active");
      }
    }
    e.target.classList.toggle("active");
  };

  render() {
    return (
      <div class={"tab-container " + this.props.theme}>
        <button
          className={"icon-btn dark " + this.state.leftIconDisplay}
          onClick={() =>
            this.tabRef.scroll({
              left: this.state.navLeftScroll - 65,
              behavior: "smooth"
            })
          }
          aria-hidden="true"
        >
          <img
            src={
              this.props.theme === "dark" ? arrowIconLeftLight : arrowIconLeft
            }
            onClick=""
            className="icon dark"
            alt=""
          />
        </button>
        <nav class={"nav-container " + this.state.navContainerActive}>
          <ul ref={elem => (this.tabRef = elem)} class="nav nav-tabs">
            <li class="nav-item">
              <button
                class="nav-link active"
                href="#"
                onClick={this.toggleTabActive}
              >
                ACTIVE
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link" href="#" onClick={this.toggleTabActive}>
                LINK
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link" href="#" onClick={this.toggleTabActive}>
                LINK
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link" href="#" onClick={this.toggleTabActive}>
                LINK
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link" href="#" onClick={this.toggleTabActive}>
                LINK
              </button>
            </li>
          </ul>
        </nav>
        <button
          className={"icon-btn dark " + this.state.rightIconDisplay}
          onClick={() =>
            this.tabRef.scroll({
              left: this.state.navLeftScroll + 65,
              behavior: "smooth"
            })
          }
          aria-hidden="true"
        >
          <img
            src={
              this.props.theme === "dark" ? arrowIconRightLight : arrowIconRight
            }
            onClick=""
            className="icon dark"
            alt=""
          />
        </button>
      </div>
    );
  }
}

export default Tab;
