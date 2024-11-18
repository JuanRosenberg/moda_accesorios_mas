// src/components/ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log("Información del error:", info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Algo salió mal. Intenta nuevamente más tarde.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;