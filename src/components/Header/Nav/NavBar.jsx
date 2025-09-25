import React, { Component } from "react";
import NavLink from "./NavLink";

export default class NavBar extends Component {
    render() {
        return (
            <nav className="hidden lg:block">
                <ul className="flex items-center gap-2">
                    <NavLink label="Collections" />
                    <NavLink label="Men" />
                    <NavLink label="Women" />
                    <NavLink label="About" />
                    <NavLink label="Contact" />
                </ul>
            </nav>
        );
    }
}
