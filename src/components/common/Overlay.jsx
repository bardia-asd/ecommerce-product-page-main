export default function Overlay({ onClose, isOpen }) {
    return (
        isOpen && (
            <div className="fixed inset-0 bg-black-75 z-40" onClick={onClose} />
        )
    );
}
