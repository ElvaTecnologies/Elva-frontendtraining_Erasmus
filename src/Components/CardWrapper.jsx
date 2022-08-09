/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import classes from "./CardWrapper.module.css";

// import { Carousel } from "@trendyol-js/react-carousel";

export const CardWrapper = () => {
  const [foodObject, setFoodObject] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
      .then(response => response.json())
      .then(data => {
        setFoodObject(data.meals);
        console.log(data.meals);
      });
  }, []);
  return (
    <div className={classes.card__wrapper}>
      {foodObject
        .map(({ idMeal, strMeal, strMealThumb }) => (
          <Card key={idMeal} name={strMeal} img={strMealThumb} />
        ))
        .slice(0, 5)}
    </div>
  );
};

export const Card = ({ name, img, price }) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__img}>
        <img src={img} alt='' />
      </div>
      <div className={classes.card__details}>
        <h4>{name}</h4>
        <p>Ghc 20.00</p>
      </div>
    </div>
  );
};
