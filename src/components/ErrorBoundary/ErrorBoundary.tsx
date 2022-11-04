import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      message: "",
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    /* Update state so the next render will show the fallback UI */
    return { hasError: true, message: error.message };
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? (
      <h1 data-testid="errorboundary">
        Oops! something went wrong, please try later.
      </h1>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
