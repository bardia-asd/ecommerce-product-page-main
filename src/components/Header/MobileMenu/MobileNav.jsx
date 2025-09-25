import React, { Component } from "react";

export default class MobileNav extends Component {
    render() {
        return (
            <div
                className={`fixed top-0 bottom-0 ${
                    this.props.isOpen ? "left-0" : "-left-60"
                } w-60 bg-white p-6 transition-all duration-150 z-50`}>
                <button
                    onClick={this.props.closeNav}
                    className="flex items-center justify-center w-8 h-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="15">
                        <path
                            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                            fill="currentColor"
                            fillRule="evenodd"
                        />
                    </svg>
                </button>

                <div className="flex flex-col gap-2 mt-7">
                    <a href="#" className="font-bold text-xl py-2">
                        Collections
                    </a>
                    <a href="#" className="font-bold text-xl py-2">
                        Men
                    </a>
                    <a href="#" className="font-bold text-xl py-2">
                        Women
                    </a>
                    <a href="#" className="font-bold text-xl py-2">
                        About
                    </a>
                    <a href="#" className="font-bold text-xl py-2">
                        Contact
                    </a>
                </div>
            </div>
        );
    }
}
