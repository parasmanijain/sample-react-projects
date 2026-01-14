import { useState, type ChangeEvent, type FC } from 'react';

// Interface definition for the form state
interface FormState {
    username: string;
    password: string;
}

// Custom hook to handle form state
const useFormState = (): [FormState, (e: ChangeEvent<HTMLInputElement>) => void] => {
    // Initial state of the form
    const initialFormState: FormState = {
        username: '',
        password: '',
    };

    // State hook for the form
    const [formState, setFormState] = useState<FormState>(initialFormState);

    // Function to handle changes in form fields
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return [formState, handleInputChange];
};

// Example component using the form hook
export const StateInitializer: FC = () => {
    // Using the custom hook to get the form state and function to handle changes
    const [formState, handleInputChange] = useFormState();

    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formState.username}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formState.password}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};