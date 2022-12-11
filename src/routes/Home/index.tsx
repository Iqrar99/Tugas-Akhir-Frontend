import { Button } from "antd";
import Typography from "antd/es/typography/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useGetPokemon from "../../hooks/useGetPokemon";
import { ButtonContainer, customButton, MainContainer } from "./styles";

const Home = () => {
  const navigate = useNavigate();
  const { data, status } = useGetPokemon("pokemon/ditto");

  const handleRedirectPage = (url: string) => {
    navigate(url);
  };

  return (
    <MainContainer>
      <Header />
      <h2>Tugas Akhir Fasilkom UI</h2>
      <Typography>Iqrar Agalosi Nureyza</Typography>
      <ButtonContainer>
        <Button onClick={() => handleRedirectPage("/list")} size='large'>Food List</Button>
        <Button onClick={() => handleRedirectPage("/predict")} size='large'>
          Predict Image
        </Button>
        <Button onClick={() => handleRedirectPage("/train")} size='large'>
          Train Image
        </Button>
      </ButtonContainer>
    </MainContainer>
  );
};

export default Home;
