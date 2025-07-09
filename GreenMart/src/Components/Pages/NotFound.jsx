// NotFound.jsx
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-lg mt-4">
        Sorry, the page you're looking for doesn't exist.
      </p>
    </div>
  );
};

export default NotFound;
