import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

const ModalContent = ({
    onClose,
    children,
}: {
    onClose: () => void;
    children: ReactNode;
}) =>
    createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    Close
                </button>
                {children}
            </div>
        </div>,
        document.body
    );

export const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isModalOpen]);

    if (!isModalOpen) return null;

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
            <ModalContent onClose={() => setIsModalOpen(false)}>
                <h1>Modal Content</h1>
                <p>This is the content inside the modal</p>
            </ModalContent>
        </div>
    );
};
