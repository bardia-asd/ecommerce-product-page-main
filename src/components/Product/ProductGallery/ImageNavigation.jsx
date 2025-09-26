import React from "react";
import NavigationButton from "./NavigationButton";

/**
 * ImageNavigation Component
 *
 * Provides navigation controls for the image gallery on mobile devices.
 * Displays previous and next buttons that are hidden on large screens.
 *
 * Props:
 * @param {function} onPrev - Callback function for previous image navigation
 * @param {function} onNext - Callback function for next image navigation
 */
export default function ImageNavigation({ onPrev, onNext }) {
    return (
        <div className="absolute inset-0 flex lg:hidden items-center justify-between px-4">
            <NavigationButton direction="left" onClick={onPrev} />
            <NavigationButton direction="right" onClick={onNext} />
        </div>
    );
}
