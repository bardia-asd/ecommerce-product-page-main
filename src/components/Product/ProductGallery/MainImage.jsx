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
export default function MainImage({
    src,
    onPrev,
    onNext,
    hideOnLargeScreen,
    size,
}) {
    // Map the `size` prop to Tailwind classes
    const sizeClass =
        size === "full"
            ? "max-w-full"
            : {
                  sm: "max-w-sm",
                  md: "max-w-md",
                  lg: "max-w-lg",
                  xl: "max-w-xl",
              }[size] || "max-w-lg";

    return (
        <div className="relative">
            {/* Main product image with responsive styling */}
            <img
                src={src}
                alt="Product"
                className={`${sizeClass} h-auto lg:rounded-2xl`}
            />

            {/* Navigation controls - only visible on mobile devices */}
            <ImageNavigation
                onPrev={onPrev}
                onNext={onNext}
                hideOnLargeScreen={hideOnLargeScreen}
            />
        </div>
    );
}
