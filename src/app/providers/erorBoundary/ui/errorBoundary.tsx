import { Component, ErrorInfo, ReactNode, Suspense } from "react";
import { withTranslation } from "react-i18next";

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.log(error, info.componentStack);
  }

  render() {
    const { hasError } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      // return this.props.fallback;
      return <Suspense fallback="">{fallback}</Suspense>;
    }

    return children;
  }
}

export default ErrorBoundary;
