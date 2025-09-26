import React, { Component } from "react";
import MainImage from "./MainImage";
import Thumbnail from "./Thumbnail";

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
export default class ProductGallery extends Component {
    constructor(props) {
        super(props);

        // Initialize component state
        this.state = {
            selectedIndex: 0, // Index of currently selected image
        };

        // Bind methods to maintain 'this' context
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
    }

    /**
     * Sets the selected image index
     * @param {number} index - The index of the image to select
     */
    setSelectedIndex(index) {
        this.setState({ selectedIndex: index });
    }

    /**
     * Navigates to the next image in the gallery
     * Wraps around to the first image if currently on the last image
     */
    nextImage() {
        this.setState((prevState) => {
            const nextIndex =
                prevState.selectedIndex >= this.props.images.length - 1
                    ? 0 // Wrap to first image if at the end
                    : prevState.selectedIndex + 1; // Move to next image
            return { selectedIndex: nextIndex };
        });
    }

    /**
     * Navigates to the previous image in the gallery
     * Wraps around to the last image if currently on the first image
     */
    previousImage() {
        this.setState((prevState) => {
            const prevIndex =
                prevState.selectedIndex <= 0
                    ? this.props.images.length - 1 // Wrap to last image if at the beginning
                    : prevState.selectedIndex - 1; // Move to previous image
            return { selectedIndex: prevIndex };
        });
    }

    render() {
        const { images } = this.props;
        const { selectedIndex } = this.state;

        return (
            <div className="space-y-6">
                {/* Main image display with navigation controls */}
                <MainImage
                    src={images[selectedIndex].full}
                    onNext={this.nextImage}
                    onPrev={this.previousImage}
                />

                {/* Thumbnail navigation - hidden on mobile, visible on large screens */}
                <div className="hidden lg:flex items-center gap-5 overflow-x-auto">
                    {images.map((image, index) => (
                        <Thumbnail
                            key={image.id}
                            src={image.thumbnail}
                            isActive={index === selectedIndex}
                            onClick={() => this.setSelectedIndex(index)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
