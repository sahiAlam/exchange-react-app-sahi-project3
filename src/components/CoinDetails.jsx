import { Box, Container } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { server } from "../index";
import axios from "axios";
import ErrorComponent from "./ErrorComponent";

const CoinDetails = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  const params = useParams();

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/${params.id}`
        );
        console.log(data);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [params.id]);

  if (error) return <ErrorComponent message={"Error While Fetching Coin"} />;

  return (
      <Container maxW={"container.xl"}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Box borderWidth={"1"} w={"full"}>
                ghgghjgy
            </Box>
          </>
        )}
      </Container>
  );
};

export default CoinDetails;
