import React, { useEffect, useState } from "react";
import { FoodsByCategory } from "../selectors/FoodsByCategory";
import { FoodsById } from "../selectors/FoodsById";
import { FoodDetail } from "./FoodDetail";

export const FoodList = ({category}) => {
  const [apiState, setApiState] = useState([]);

  useEffect(() => {
    FoodsInfo();
  }, []);

  const FoodsInfo = async () => {
    const url =
      "https://my-json-server.typicode.com/AcademiaGeek1/Guappjalotas/foods";
    const resp = await fetch(url);
    const data = await resp.json();
    setApiState(data);
  };
  console.log("api principal", apiState);

  return (
    <div>
      <FoodsByCategory 
      apiState={apiState}
      category={category}
      />
      <FoodDetail apiState={apiState} />
    </div>
  );
};
