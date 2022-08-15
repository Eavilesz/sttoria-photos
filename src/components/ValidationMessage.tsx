import React from "react";

interface ValidationMessageProps {
  message: string;
}

const ValidationMessage: React.ComponentType<ValidationMessageProps> = (
  props
) => {
  const { message } = props;
  return <p className="text-red-500 text-md italic mt-2">{message}</p>;
};
export default ValidationMessage;
