import React from "react";
import Icon from "../../common/Icon";

/**
 * NavigationButton Component
 *
 * A reusable button component for image gallery navigation.
 * Displays a circular button with an icon for navigation controls.
 *
 * Props:
 * @param {string} direction - The direction of navigation ("left" or "right")
 * @param {function} onClick - Callback function to handle button click
 * @param {string} className - Additional CSS classes to apply (optional)
 */
export default function NavigationButton({ direction, onClick }) {
    // Determine the icon name based on direction
    const iconName = direction === "left" ? "chevron-left" : "chevron-right";

    return (
        <button
            className={`flex items-center justify-center w-10 h-10 rounded-full bg-white cursor-pointer`}
            onClick={onClick}
            aria-label={`Navigate ${direction}`}>
            <Icon name={iconName} size={24} />
        </button>
    );
}
