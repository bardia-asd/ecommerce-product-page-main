import React, { Component } from "react";
import Icon from "../../common/Icon";
import MobileNav from "./MobileNav";
import Overlay from "../../common/Overlay";

export default class MobileMenu extends Component {
    constructor(params) {
        super(params);

        this.state = {
            isOpen: false,
        };

        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    openNav() {
        this.setState((prev) => ({ isOpen: true }));
    }

    closeNav() {
        this.setState((prev) => ({ isOpen: false }));
    }

    render() {
        return (
            <div className="lg:hidden">
                <button
                    className="flex items-center justify-center w-8 h-8"
                    onClick={this.openNav}>
                    <Icon name={"text-align-justify"} size={24} />
                </button>

                <MobileNav
                    isOpen={this.state.isOpen}
                    closeNav={this.closeNav}
                />

                <Overlay isOpen={this.state.isOpen} onClose={this.closeNav} />
            </div>
        );
    }
}
