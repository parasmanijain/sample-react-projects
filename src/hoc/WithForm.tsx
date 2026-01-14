import {
    useState,
    type ChangeEvent,
    type ComponentType,
    type FC,
    type FormEvent,
} from "react";

export interface FormValues {
    [key: string]: string;
}

// Props injected by HOC into wrapped component
export interface InjectedFormProps {
    formValues: FormValues;
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function withForm<P>(
    WrappedComponent: ComponentType<P & InjectedFormProps>
) {
    const WithForm: FC<P> = (props) => {
        const [formValues, setFormValues] = useState<FormValues>({});

        const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            setFormValues((prev) => ({
                ...prev,
                [name]: value,
            }));
        };

        const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log("Form submitted:", formValues);
        };

        return (
            <WrappedComponent
                {...props}
                formValues={formValues}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
            />
        );
    };

    return WithForm;
}
