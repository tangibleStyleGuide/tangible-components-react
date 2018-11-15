/*
* Tangible Style Guide
* Copyright 2018 Freeman Co.
* 
* # Slider Continuous
* 
* Props to be passed:
* ` min  - int  | 0-100
* ` max  - int  | 0-100
*
* Call: 
* ` <SliderContinuous min={0} max={100} step={1}></SliderContinuous>
*/

import React, { Component } from "react";

class SliderContinuous extends Component {

    constructor() {
        super()
        this.state = { value: .5 }
        this.changeValue = this.changeValue.bind(this)
    }

    changeValue(props) {
        this.setState({ value: this.refs.input.value * this.props.max })
    }

    render() {

        return (
            <div className="slider-style">
                <input ref="input" type="range" className="range-style"
                    onChange={this.changeValue}
                    defaultValue={this.props.max / 2}
                    min={this.props.min} max={this.props.max}
                    step={this.props.max / 100}
                    role="slider"
                />
                <progress className="progress-bar-style"
                    value={this.state.value}
                    min={this.props.min} max={this.props.max}
                ></progress>
            </div>
        )
    }
}

export default SliderContinuous;
