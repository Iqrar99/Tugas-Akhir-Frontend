import { Card, Typography } from "antd";
import React from "react";
import Header from "../../components/Header";
import useGetFoodList from "../../hooks/useGetFoodList";
import { FoodListContainer } from "./styles";

const FoodList = () => {
  const { data: foods, status } = useGetFoodList("/api/food/list");

  return (
    <FoodListContainer>
      <Header />
      {foods.map((food, index) => (
        <Card
          hoverable
          key={index}
          cover={
            <img
              alt={food.class_name}
              src={food.image_url}
              style={{
                height: 240,
              }}
            />
          }
        >
          <h4>{`${food.food_name} - ${food.food_location}`}</h4>
          <h6>Bahan Makanan:</h6>
          {food.food_ingredients.map((ingredient, idx) => (
            <Typography>- {ingredient}</Typography>
          ))}
        </Card>
      ))}
    </FoodListContainer>
  );
};

export default FoodList;
