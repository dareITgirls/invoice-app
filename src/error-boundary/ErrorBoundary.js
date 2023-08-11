import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

import { ErrorExample } from "./ErrorExample";

export const ErrorBoundary = ({ children }) => {

  const errorFallback = ({ error }) => {
    if (error) {
      return <ErrorExample error={error} />;
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


