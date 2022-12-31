import {
  AlertIcon,
  Alert,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <>
      <Alert
        status="error"
        width={"container.sm"}
        pos={"fixed"}
        bottom={"2"}
        borderRadius={"md"}
      >
        <AlertIcon />
        <AlertTitle>Error !</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </>
  );
};

export default ErrorComponent;
