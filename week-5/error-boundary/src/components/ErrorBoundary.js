import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      // logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        if (this.props.isHome) {
          return <h1>Project does not working.</h1>;
        } else {
          return <h1>Component ({this.props.componentName}) does not working.</h1>;
        }
        // You can render any custom fallback UI
      }

      return this.props.children; 
    }
  }

  export default ErrorBoundary;
  