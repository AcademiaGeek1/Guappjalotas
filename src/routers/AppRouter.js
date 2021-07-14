import React from 'react'
import { BrowserRouter as Router,Switch, Route, Redirect } from 'react-router-dom'
import { BebidasCard } from '../components/comidas/BebidasCard'
import { FoodDetail } from '../components/comidas/FoodDetail'
import { GuajalotasCard } from '../components/comidas/GuajalotasCard'
import { TamalesCard } from '../components/comidas/TamalesCard'
import { Navbar } from '../components/Navbar'

export const AppRouter = () => {
    return (
        <Router>
           <Navbar />
            <Switch>
                <Route exact path="/Guajalotas" component={GuajalotasCard}/>
                <Route exact path="/Bebidas" component={BebidasCard}/>
                <Route exact path="/Tamales" component={TamalesCard}/>
                <Route exact path="/food/:foodId" component={FoodDetail}/>
                <Redirect to="/Guajalotas" />
            </Switch>
        </Router>
    )
}
