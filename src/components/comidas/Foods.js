import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { FoodsTitulo } from "../../styles/styles";
import { FoodsByCategory } from "../selectors/FoodsByCategory";
import { FoodDetail } from "./FoodDetail";

export const Foods = ({data}) => {

  return (
    <div>
      {data.map((food) => (
        <div key={food.id}>
          <Link to={`./food/${food.id}`} style={{textDecoration:'inherit',color:'inherit'}}>
            <div className="card mb-3 ms-4 me-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={food.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <FoodsTitulo className="card-title">{food.flavor}</FoodsTitulo>
                    <h6 className="card-title">${food.price}MXN</h6>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
