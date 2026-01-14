import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
    renderError: (error: Error, errorInfo: ErrorInfo) => ReactNode;
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}


class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo,
        });
    }

    render() {
        const { renderError, children } = this.props;
        const { hasError, error, errorInfo } = this.state;

        if (hasError) {
            return renderError(error!, errorInfo!);
        }

        return children;
    }
}

const renderError = (error: Error, errorInfo: ErrorInfo) => {
    return (
        <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
                {error && error.toString()}
                <br />
                {errorInfo.componentStack}
            </details>
        </div>
    );
};

export const RenderProps = () => {
    return (<ErrorBoundary renderError={renderError}>
        {/* Componentes envueltos por el ErrorBoundary */}
        <div>
            <h1>Welcome to My App</h1>
            <p>This is a sample application.</p>
            {/* Simulando un error */}
            <button onClick={() => { throw new Error('An unexpected error occurred.'); }}>
                Trigger Error
            </button>
        </div>
    </ErrorBoundary>)
}


