import React, { Component } from "react";
import ImageNavigation from "./ImageNavigation";

/**
 * MainImage Component
 *
 * A class-based React component that displays the main product image
 * with navigation controls overlaid on top. The navigation controls
 * are only visible on mobile devices (hidden on large screens).
 *
 * Props:
 * @param {string} src - The source URL of the main product image
 * @param {function} onPrev - Callback function for previous image navigation
 * @param {function} onNext - Callback function for next image navigation
 */
export default class MainImage extends Component {
    render() {
        return (
            <div className="relative lg:rounded-2xl overflow-hidden">
                {/* Main product image with responsive styling */}
                <img
                    src={this.props.src}
                    alt="Product"
                    className="w-full h-auto object-cover"
                />

                {/* Navigation controls - only visible on mobile devices */}
                <ImageNavigation
                    onPrev={this.props.onPrev}
                    onNext={this.props.onNext}
                />
            </div>
        );
    }
}
