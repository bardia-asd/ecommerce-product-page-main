import React, { Component } from "react";

export default class Overlay extends Component {
    render() {
        return (
            <div
                className={`fixed inset-0 ${
                    this.props.isOpen ? "block" : "hidden"
                } bg-black-75 z-40`}
                onClick={this.props.closeNav}
            />
        );
    }
}
