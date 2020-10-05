import React  from 'react'
import styled from 'styled-components'

import RecipeComponent from '../components/RecipeComponent'
import Loader from '../components/Loader'
import Search from '../components/search'
import {RecipeContext} from '../context/context'


const RecipeList = () => {
const {recipes, isLoading} = React.useContext(RecipeContext)
    return(
        <Wrapper >
            <header>
            <Search />
            </header>
            {isLoading? <Loader /> :
                <div className='recipes-list-body'>
                {recipes.map(hit => <RecipeComponent  key={hit.recipe.uri} recipe={hit.recipe}/>)}
            </div>
            }
        </Wrapper>
    )
}
const Wrapper = styled.div`
header{
    height: 9vh;
    background-color: tomato;
    display:grid;
    justify-content:center;
    align-items:center;
}
.recipes-list-body {
    margin: 4rem 2rem 2rem 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
    gap: 2rem;
    justify-content: center;
}
`
export default RecipeList