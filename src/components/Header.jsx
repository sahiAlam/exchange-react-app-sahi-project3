import { Button, Container, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HStack bgColor={"blackAlpha.900"} p={"4"} shadow={"lg"}>
        {/* <Container maxW={"1300px"} border={"1px solid red"}> */}
          <Button variant={"unstyled"} color={"white"} >
            <Link to={"/"}>Home</Link>
          </Button>
          <Button variant={"unstyled"} color={"white"} >
            <Link to={"/exchanges"}>Exchanges</Link>
          </Button>
          <Button variant={"unstyled"} color={"white"} >
            <Link to={"/coins"}>Coins</Link>
          </Button>
        {/* </Container> */}
      </HStack>
    </>
  );
};

export default Header;
