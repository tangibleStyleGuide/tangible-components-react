/*
* Tangible Style Guide
* Copyright 2018 Freeman Co.
*
* # Header
*
* Call: 
* ` <Header></Header>
*/

import React, { Component } from "react";

import searchIcon from "../../assets/images/iconSearch.svg";
import menuIcon from "../../assets/images/iconMenuLight.svg";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			detailView: false,
			to: null
		};
	}

	openSearchBar = () => {

	}

	toggleSidebar = () => {

	}

	render() {
		return (
			<nav className="header float-right" aria-label="header">
				<div className="">
					<button className="icon-btn float-left" onClick={this.toggleSidebar} aria-label="Search">
						<img src={menuIcon} onClick="" className="icon" />
					</button>
				</div>
				<div className="float-right">
					<button className="icon-btn" onClick={this.toggleSidebar}
						aria-role="checkbox" aria-checked="true" aria-label="Toggle Sidebar">
						<img src={searchIcon} className="icon-small" />
					</button>
				</div>
				<div>
					<form className="navbar-right" aria-hidden={true}>
					</form>
				</div>
			</nav>
		);
	}
}


//temporary
export default Header;