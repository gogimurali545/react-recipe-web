import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function RecipeComponent(props) {

    return (
        <Wrapper>
            <Link to={`/${encodeURIComponent(props.recipe.uri)}`}>
                <img src={props.recipe.image} alt='' className='recipe-image'></img>
                <h1 className='recipe-title'>{props.recipe.label.toLowerCase()}</h1>
            </Link>
            <p className='recipe-yield'>{props.recipe.yield} - Servings</p>
        </Wrapper>


    )
}

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    border-radius:.5rem;
    box-shadow:1px 2px 8px rgba(0, 0, 0, 0.5);
    overflow:hidden;
    &:hover .recipe-image {
    transform:scale(1.05);
  }
  &:hover .recipe-title {
    color:tomato;
  }

img {
    transition: all 0.3s ease-in;
    width:100%;
    border-radius:0.5rem;
    
    
}
h1 {
    color:black;
    text-align:center;
    font-family:'Lato', sans-serif;
    font-weight:700;
    text-transform:capitalize;
    font-size:1.4rem;
}
p{
    text-align:end;
    font-family:'Lato', sans-serif;
    font-weight:400;
    font-style:italic;
    font-size:1rem;
    padding:0 0.5rem;
}
`

export default RecipeComponent