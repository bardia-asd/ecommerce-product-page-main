import React, { Component } from "react";
import NavLink from "./NavLink";

export default function NavBar() {
    const navLabels = ["Collections", "Men", "Women", "About", "Contact"];

    return (
        <nav className="hidden lg:block">
            <ul className="flex items-center gap-2">
                {navLabels.map((label) => (
                    <NavLink key={label} label={label} />
                ))}
            </ul>
        </nav>
    );
}
