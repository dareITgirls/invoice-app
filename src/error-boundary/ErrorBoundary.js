import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

import { ErrorExampleComponentTest } from "./ErrorExampleComponentTest";

const ErrorBoundary = ({ children }) => {
  const errorFallback = ({ error }) => {
    if (error.code === "permission-denied") {
      return <ErrorExampleComponentTest error={error} />;
    } else {
      return <div>Oops! Something went wrong.</div>;
    }
  };

  return (
    <ReactErrorBoundary FallbackComponent={errorFallback}>
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
