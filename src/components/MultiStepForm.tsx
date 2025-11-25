import { useState, type FormEvent } from "react";

interface StepButtonProp {
    [x: string]: () => void
}

const Step1 = ({ next }: StepButtonProp) => (
    <div>
        <h2>Step 1</h2>
        <button onClick={next}>Next</button>
    </div>
);

const Step2 = ({ next, previous }: StepButtonProp) => (
    <div>
        <h2>Step 2</h2>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
    </div>
);

const Step3 = ({ previous }: StepButtonProp) => (
    <div>
        <h2>Step 3</h2>
        <button onClick={previous}>Previous</button>
        <button type="submit">Submit</button>
    </div>
);

export const MultiStepForm = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const previousStep = () => setStep(step - 1);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
        <form onSubmit={handleSubmit}>
            {step === 1 && <Step1 next={nextStep} />}
            {step === 2 && <Step2 next={nextStep} previous={previousStep} />}
            {step === 3 && <Step3 previous={previousStep} />}
        </form>
    );
};