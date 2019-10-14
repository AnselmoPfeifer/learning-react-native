import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard/index'
import Login from './pages/Login/index'
import New from './pages/New/index'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/login" component={Login}/>
                <Route path="/new" component={New}/>
                <Route path="/dashboard" component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    )
}
