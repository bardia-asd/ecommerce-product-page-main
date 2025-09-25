import React, { Component } from "react";

export default class NavLink extends Component {
    render() {
        return (
            <li>
                <a
                    href="#"
                    className="group relative flex flex-col items-center px-3 xl:px-4 py-2 text-dark-grayish-blue hover:text-very-dark-blue transition-colors duration-150">
                    {this.props.label}
                    <span className="absolute -bottom-7 right-0 left-0 bg-orange w-12 h-1 mx-auto rounded-full scale-0 group-hover:scale-100 transition-transform duration-150"></span>
                </a>
            </li>
        );
    }
}
