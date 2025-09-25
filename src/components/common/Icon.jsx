import React from "react";

export default function Icon({ name, size = 24 }) {
    return (
        <svg width={size} height={size}>
            <use href={`#icon-${name}`}></use>
        </svg>
    );
}
