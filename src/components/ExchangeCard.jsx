import { VStack, Image, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ExchangeCard = ({ name, image, rank, url }) => {
  return (
    <>
      <a href={url} target={"blank"} border={"1px solid"}> 
        <VStack
          w={"52"}
          p={"10"}
          shadow={"lg"}
          m={"4"}
          borderRadius={"lg"}
          transition={"all 0.3s"}
          css={{
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image src={image} width={"12"} height={"12"} objectFit={"contain"} />
          <Heading size={"md"} noOfLines={"1"}>
            {rank}
          </Heading>
          <Text noOfLines={"1"}>{name}</Text>
        </VStack>
      </a>
    </>
  );
};

export default ExchangeCard;