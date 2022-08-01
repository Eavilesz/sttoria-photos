import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  render() {
    if (this.state.error) {
      return <div>{this.state.error.toString()}</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
