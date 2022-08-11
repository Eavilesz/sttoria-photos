import React from "react";

interface Error {
  error: { message: string };
}

function ErrorFallback({ error }: Error) {
  return (
    <div className="flex h-screen">
      <div className="text-white m-auto" role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
      </div>
    </div>
  );
}

export default ErrorFallback;
