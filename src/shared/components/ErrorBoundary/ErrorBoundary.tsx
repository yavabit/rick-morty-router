import { Component, ErrorInfo } from "react";

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props)

		this.state = {
			hasError: false
		}
	}

	static getDerivedStateFromError(error: Error) {
		console.log(error);
        return { hasError: true };
    }

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.log(error.message);
		console.log(errorInfo);
	}

	render() {
		if(this.state.hasError) {
			return <h4>Что-то пошло не так</h4>
		}
		return this.props.children
	}
}

export default ErrorBoundary;