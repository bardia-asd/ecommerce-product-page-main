import React, { Component } from "react";
import MobileNav from "./MobileNav";
import Overlay from "./Overlay";

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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15">
                        <path
                            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
                            fill="currentColor"
                            fillRule="evenodd"
                        />
                    </svg>
                </button>

                <MobileNav
                    isOpen={this.state.isOpen}
                    closeNav={this.closeNav}
                />

                <Overlay isOpen={this.state.isOpen} closeNav={this.closeNav} />
            </div>
        );
    }
}
