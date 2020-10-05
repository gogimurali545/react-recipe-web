import React from 'react'
import ReactDom from 'react-dom'

import {RecipeProvider} from './context/context.js'
import App from './App.js'

ReactDom.render(
    <React.StrictMode>
        <RecipeProvider>
            <App />
        </RecipeProvider>
    </React.StrictMode>
    , document.getElementById('root'))