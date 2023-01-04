import React from "react";
import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const Error = () => {
  return (
    <>
      <Box w={"full"} h={"100vh"}>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Oops!! 404</AlertTitle>
          <AlertDescription>Page Not Found</AlertDescription>
        </Alert>
      </Box>
    </>
  );
};

export default Error;