import type { FC, ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
    color?: string;
    size?: 'small' | 'medium' | 'large';
    onClick: () => void;
    children: ReactNode
}

export const Button: FC<ButtonProps> = ({ color = 'blue', size = 'medium', onClick, children }) => {
    const buttonClasses = `Button ${color} ${size}`;

    return (
        <button className={buttonClasses} onClick={onClick}>
            {children}
        </button>
    );
};