import { Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, Right } from "./styles";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <h2>Food Classification Dashboard by Iqrar Agalosi Nureyza</h2>
      <Right>
        <p onClick={() => navigate("/")}color="white">Home</p>
        <p onClick={() => navigate("/list")} color="white">Food List</p>
        <p onClick={() => navigate("/predict")} color="white">Predict Image</p>
        <p onClick={() => navigate("/train")} color="white">Train Image</p>
      </Right>
    </HeaderContainer>
  );
};

export default Header;
