import { Component } from "react";

import { ErrorExampleComponent } from "../components/ErrorExample";
import { db } from "../firebase-config/firebase";

const ErrorHandler = (WrappedComponent) => {
  return class ErrorHandler extends Component {
    state = {
      error: null,
    };

    doFirestoreOperation() {
      try {
        db.collection(db).add({ data: "exampleData" });
        this.setState({ error: null });
      } catch (error) {
        this.setState({ error });
      }
    }

    componentDidMount() {
      this.doFirestoreOperation();
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
