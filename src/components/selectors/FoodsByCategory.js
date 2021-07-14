import React from 'react'
import { Foods } from '../comidas/Foods'

export const FoodsByCategory = ({apiState,category, nombre}) => {
    const validCategory = ['1', '2', '3']

    if (!validCategory.includes(category)) {
        throw new Error(`category ${category} es incorrecto`)
    }
    const data = apiState.filter(food => food.category === parseInt(category))
    
    console.log("llegó la api a la category", apiState)
    console.log("Llegó el nombre", nombre)
    console.log("llego la categoria", category)
    console.log("data filtrada", data)
    return (
        <div>
            <Foods data={data}/>
        </div>
    )
}

