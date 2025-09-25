import React, { Component } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import Logo from "./Logo";
import NavBar from "./Nav/NavBar";
import Cart from "./Cart";
import Avatar from "./Avatar";

export default class Header extends Component {
    render() {
        return (
            <header className="px-4 py-6 lg:px-0 lg:py-7 border-b border-grayish-blue/30">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 lg:gap-8">
                        <MobileMenu />
                        <Logo />
                        <NavBar />
                    </div>

                    <div className="flex items-center gap-4 lg:gap-8">
                        <Cart />
                        <Avatar/>
                    </div>
                </div>
            </header>
        );
    }
}
