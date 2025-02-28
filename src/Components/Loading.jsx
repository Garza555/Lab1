import React from "react";

export const LoadingMessage = ({ message = "Loading..." }) => {
  return (
    <div className="alert alert-info text-center">
      {message}
    </div>
  );
};
