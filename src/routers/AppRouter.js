import React from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import { BebidasCard } from '../components/comidas/BebidasCard'
import { GuajalotasCard } from '../components/comidas/GuajalotasCard'
import { TamalesCard } from '../components/comidas/TamalesCard'
import { Navbar } from '../components/Navbar'


export const AppRouter = () => {
    return (
        <Router>
           <Navbar />
            <Switch>
                <Route exact path="/Guajalotas" component={GuajalotasCard}/>
                <Route exact path="/Bebidas" component={TamalesCard}/>
                <Route exact path="/Tamales" component={BebidasCard}/>
            </Switch>
        </Router>
    )
}
