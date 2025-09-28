import React, { Component } from "react";

export default class Overlay extends Component {
    render() {
        const { onClose, isOpen } = this.props;

        if (!isOpen) return null

        return (
            <div
                className={`fixed inset-0 bg-black-75 z-40`}
                onClick={onClose}
            />
        );
    }
}
