import React from 'react'
import { Foods } from './components/comidas/Foods'
import { AppRouter } from './routers/AppRouter'

export const GuajalotasApp = () => {
    return (
        <div>
            <AppRouter />
            <Foods />
        </div>
    )
}
