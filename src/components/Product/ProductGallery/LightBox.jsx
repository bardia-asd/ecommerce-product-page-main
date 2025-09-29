import React, { Component } from "react";
import MainImage from "./MainImage";
import Thumbnail from "./Thumbnail";
import Overlay from "../../common/Overlay";
import Icon from "../../common/Icon";

export default class LightBox extends Component {
    constructor(props) {
        super(props);

        // Initialize component state
        this.state = {
            selectedIndex: 0,
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
        const { images, onClose, isOpen } = this.props;
        const { selectedIndex } = this.state;

        if (!isOpen) return null;

        return (
            <>
                <div className="fixed inset-0 flex flex-col items-center justify-center gap-4 z-50 pointer-events-none">
                    <div className="space-y-4 pointer-events-auto">
                        <button
                            className="flex items-center justify-center w-8 h-8 ml-auto text-white hover:text-orange transition-colors duration-150 cursor-pointer"
                            onClick={onClose}>
                            <Icon name={"x"} />
                        </button>
                        <MainImage
                            src={images[selectedIndex].full}
                            onNext={this.nextImage}
                            onPrev={this.previousImage}
                            hideOnLargeScreen={true}
                            size={"xl"}
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
                </div>
                <Overlay isOpen={isOpen} onClose={onClose} />
            </>
        );
    }
}
