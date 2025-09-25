import React, { Component } from "react";
import AvatarImage from "../../assets/images/image-avatar.png";

export default class Avatar extends Component {
    render() {
        return (
            <div className="size-7 sm:size-10 lg:border-2 border-transparent hover:border-orange/70 rounded-full transition-colors duration-150 cursor-pointer">
                <img src={AvatarImage} alt="Avatar" className="w-full h-auto object-cover" />
            </div>
        );
    }
}
