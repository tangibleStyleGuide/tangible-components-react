/*
* Tangible Style Guide
* Copyright 2018 Freeman Co.
* 
* # Slider Discrete
* 
* Props to be passed:
* ` min  - int  | 0-100
* ` max  - int  | 0-100
* ` step - int  | 0-100
*
* Call: 
* ` <SliderDiscrete min={0} max={100} step={1}></SliderDiscrete>
*/

import React, { Component } from "react";

class SliderDiscrete extends Component {

    constructor() {
        super()
        this.state = { value: 50 }
        this.changeValue = this.changeValue.bind(this)
    }

    changeValue(props) {
        this.setState({ value: this.refs.input.value })
        this.refs.inputLabel.value = this.refs.input.value
    }

    render() {

        return (
            <div>
                <div className="discrete-slider-label" style={{ marginLeft: this.state.value * 2.55 + 13 + 'px' }}>{this.state.value}</div>
                <div className="discrete-slider-label-style">
                    <input ref="inputLabel" type="range" className="range-style-label"
                        onLoad={this.changeValue}
                        onChange={this.changeValue}
                        defaultValue={this.state.value}
                        min={0} max={100}
                        step={this.props.step}
                        disabled />
                    <progress value={this.state.value} min={0} max={100} className="progress-bar-label-style"></progress>
                </div>
                <div className="discrete-slider-style">
                    <input ref="input" type="range" className="range-style"
                        onLoad={this.changeValue}
                        onChange={this.changeValue}
                        defaultValue={this.props.max / 2}
                        min={this.props.min} max={this.props.max}
                        step={this.props.step}
                        role="slider" />
                    <progress value={this.state.value} min={this.props.min} max={this.props.max}
                        className="progress-bar-style"></progress>
                </div>
            </div>
        )
    }
}

export default SliderDiscrete;