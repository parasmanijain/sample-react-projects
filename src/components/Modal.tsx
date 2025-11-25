import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
    onClose: () => void;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>

            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>Close</button>
                {children}
            </div>
        </div>,
        document.body
    );
};
