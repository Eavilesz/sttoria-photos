import React from "react";

interface Error {
  error: { message: string };
}

function ErrorFallback({ error }: Error) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

export default ErrorFallback;
