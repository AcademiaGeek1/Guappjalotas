import React from 'react'
import { useParams } from 'react-router-dom'
import { FoodsById } from '../selectors/FoodsById'
import { FoodList } from './FoodList'

export const FoodDetail = ({apiState}) => {
    const {foodId} = useParams()
    
    const food = FoodsById(foodId,apiState)
    // console.log("parametro food",food)
    return (
        <div>
            <h1>Detalles</h1>
          
        </div>
    )
}
