import React, { Component } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import Logo from "./Logo";
import NavBar from "./Nav/NavBar";
import ShoppingCart from "./ShoppingCart/shoppingCart";
import Avatar from "./Avatar";

export default class Header extends Component {
    render() {
        const { items, onRemove } = this.props;
        return (
            <header className="fixed top-0 right-0 left-0 z-10">
                <div className="container mx-auto lg:px-4">
                    <div className="flex items-center justify-between px-4 py-6 lg:px-0 lg:py-7 bg-white border-b border-grayish-blue/30 ">
                        <div className="flex items-center gap-4 lg:gap-8">
                            <MobileMenu />
                            <Logo />
                            <NavBar />
                        </div>

                        <div className="flex items-center gap-4 lg:gap-8">
                            <ShoppingCart items={items} onRemove={onRemove} />
                            <Avatar />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
