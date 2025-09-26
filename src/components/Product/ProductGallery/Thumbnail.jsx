import React, { Component } from "react";

export default class Thumbnail extends Component {
    render() {
        return (
            <div
                className={`shrink-0 w-20 h-20 lg:w-24 lg:h-24 border-4 ${
                    this.props.isActive ? "border-orange" : "border-transparent"
                } rounded-xl overflow-hidden`} onClick={this.props.onClick}>
                <img
                    src={this.props.src}
                    alt="Product Thumbnail"
                    className="w-full h-auto"
                />
            </div>
        );
    }
}
