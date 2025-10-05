import React, { useState } from "react";
import MainImage from "./MainImage";
import Thumbnail from "./Thumbnail";
import Overlay from "../../common/Overlay";
import Icon from "../../common/Icon";

export default function LightBox({ images, onClose, isOpen }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    /** Navigate to the next image */
    const nextImage = () => {
        setSelectedIndex((prevIndex) =>
            prevIndex >= images.length - 1 ? 0 : prevIndex + 1
        );
    };

    /** Navigate to the previous image */
    const previousImage = () => {
        setSelectedIndex((prevIndex) =>
            prevIndex <= 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        isOpen && (
            <>
                <div className="fixed inset-0 flex flex-col items-center justify-center gap-4 z-50 pointer-events-none">
                    <div className="space-y-4 pointer-events-auto">
                        <button
                            className="flex items-center justify-center w-8 h-8 ml-auto text-white hover:text-orange transition-colors duration-150 cursor-pointer"
                            onClick={onClose}>
                            <Icon name="x" />
                        </button>

                        <MainImage
                            src={images[selectedIndex].full}
                            onNext={nextImage}
                            onPrev={previousImage}
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
                                    onClick={() => setSelectedIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <Overlay isOpen={isOpen} onClose={onClose} />
            </>
        )
    );
}
