import React, { useState } from "react";
import MainImage from "./MainImage";
import Thumbnail from "./Thumbnail";
import LightBox from "./LightBox";

/**
 * ProductGallery Component
 *
 * A class-based React component that displays a product image gallery with:
 * - Main image display with navigation controls
 * - Thumbnail navigation for desktop view
 * - Image cycling functionality (next/previous)
 *
 * Props:
 * @param {Array} images - Array of image objects with id, full, and thumbnail properties
 */
export default function ProductGallery({ images }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    /**
     * Navigates to the next image in the gallery
     * Wraps around to the first image if currently on the last image
     */
    const nextImage = () => {
        setSelectedIndex((prevIndex) =>
            prevIndex >= images.length - 1 ? 0 : prevIndex + 1
        );
    };

    /**
     * Navigates to the previous image in the gallery
     * Wraps around to the last image if currently on the first image
     */
    const previousImage = () => {
        setSelectedIndex((prevIndex) =>
            prevIndex <= 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div onClick={() => setIsOpen(true)} className="cursor-pointer">
            {/* Main image display with navigation controls */}
            <div onClick={() => setIsOpen(true)}>
                <MainImage
                    src={images[selectedIndex].full}
                    onNext={nextImage}
                    onPrev={previousImage}
                    hideOnLargeScreen={false}
                    size={"full"}
                />
            </div>

            {/* Thumbnail navigation - hidden on mobile, visible on large screens */}
            <div className="hidden lg:flex items-center gap-5 overflow-x-auto">
                {images.map((image, index) => (
                    <Thumbnail
                        key={image.id}
                        src={image.thumbnail}
                        isActive={index === selectedIndex}
                        onClick={() => setSelectedIndex(index)}
                    />
                ))}
            </div>

            <div className="hidden xl:block">
                <LightBox
                    images={images}
                    onClose={() => setIsOpen(false)}
                    isOpen={isOpen}
                />
            </div>
        </div>
    );
}
