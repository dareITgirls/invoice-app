import { Component } from "react";

import { ErrorExampleComponent } from "../components/ErrorExample";

const ErrorHandler = (WrappedComponent) => {
  return class ErrorHandler extends Component {
    state = {
      error: null,
    };

    componentDidCatch(error) {
      this.setState({ error });
    }

    render() {
      const { error } = this.state;
      if (error) {
        // Render ErrorComponent with the error message
        return <ErrorExampleComponent error={error} />;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default ErrorHandler;
