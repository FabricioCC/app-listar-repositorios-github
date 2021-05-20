import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import FindUser from './pages/FindUser'
import UserResults from './pages/UserResults'

function RoutesControl() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true}  component={FindUser}/>
                <Route path="/users/:name" component={UserResults}/>
            </Switch>
        </BrowserRouter>
    )
}

export default RoutesControl;
