import React from "react"
import Header from "./components/Header"
import Home from "./Pages/Home"
import ServicesList from "./Pages/services/ServicesList"
import ServicesDetail from "./Pages/services/ServiceDetail"

import {Switch, Route} from "react-router-dom"

function App() {
    return (
        <div>
            <Header />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/services" >
                    <ServicesList />
                </Route>
                <Route path="/services" >
                    <ServicesDetail />
                </Route>
            </Switch>
        </div>
    )
}

export default App