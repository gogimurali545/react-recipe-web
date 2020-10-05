import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import RecipeList from './pages/RecipeList.js'
import RecipeDetail from './pages/RecipeDetail.js'


function App () {

    return(
            <Router>
            <Switch>
            <Route path='/' exact  component={RecipeList}></Route>
            <Route path='/:id'  component={RecipeDetail}></Route>
            </Switch>
            </Router>
    )
}

export default App