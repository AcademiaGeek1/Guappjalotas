import React from 'react'
import { useParams } from 'react-router-dom'
import { FoodsById } from '../selectors/FoodsById'
import { FoodList } from './FoodList'

export const FoodDetail = () => {
    const {foodId} = useParams()
    console.log("parametro",foodId)
    const food = FoodsById({foodId})

    return (
        <div>
            <h1>Detalles</h1>
          
        </div>
    )
}
