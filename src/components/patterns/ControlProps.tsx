import { useState, type FC } from 'react';

interface ToggleProps {
    value: boolean;
    onChange: (value: boolean) => void;
}

const Toggle: FC<ToggleProps> = ({ value, onChange }) => {
    const handleClick = () => {
        onChange(!value);
    };

    return (
        <button onClick={handleClick}>
            {value ? 'On' : 'Off'}
        </button>
    );
};

// Usage of the Toggle component controlled by props
export const ControlProps: FC = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggleChange = (value: boolean) => {
        setIsToggled(value);
    };

    return (
        <div>
            <h1>Control Props Example</h1>
            <Toggle value={isToggled} onChange={handleToggleChange} />
            <p>The current state is: {isToggled ? 'On' : 'Off'}</p>
        </div>
    );
};