import React, { useEffect, useState } from 'react'

export const Foods = () => {
    const [apiState, setApiState] = useState([])

    useEffect(() => {
        FoodsInfo()
        console.log("api", apiState)
    }, [])

    const FoodsInfo = async () => {
        const url = 'https://my-json-server.typicode.com/AcademiaGeek1/Guappjalotas/foods'
        const resp = await fetch(url)
        const data = await resp.json()
        setApiState(data)
    }

    return (
        <div>
            {
                apiState.map(food => (
                    <div key={food.id}>
                        <div className="card mb-3 ms-4 me-4">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={food.image_main} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{food.flavor}</h5>
                                        <h6>${food.price}MXN</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}