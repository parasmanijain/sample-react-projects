import React from "react";
import { withForm, type InjectedFormProps } from "../hoc/WithForm";

// No extra props needed from App
type MyFormProps = InjectedFormProps;

const MyForm: React.FC<MyFormProps> = ({
    formValues,
    onInputChange,
    onSubmit,
}) => {
    return (
        <form onSubmit={onSubmit}>
            <h2>HOC Form</h2>

            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formValues.name || ""}
                onChange={onInputChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email || ""}
                onChange={onInputChange}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export const FormWithLogic = withForm(MyForm);
