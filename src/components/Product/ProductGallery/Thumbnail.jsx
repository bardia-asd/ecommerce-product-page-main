export default function Thumbnail({ isActive, onClick, src }) {
    return (
        <div
            className={`shrink-0 w-20 h-20 lg:w-24 lg:h-24 border-4 ${
                isActive ? "border-orange" : "border-transparent"
            } rounded-xl overflow-hidden`}
            onClick={onClick}>
            <img src={src} alt="Product Thumbnail" className="w-full h-auto" />
        </div>
    );
}
