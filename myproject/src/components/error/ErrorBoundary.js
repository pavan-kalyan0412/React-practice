import React, { Component } from 'react'


class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    } 

    componentDidCatch (error, errorInfo){
        console.error ("error caused by Errorboundary ❌:", error, errorInfo)
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>; // Fallback UI
      }
  
      return this.props.children; // Render children as usual
    }
  }
  
  export default ErrorBoundary;