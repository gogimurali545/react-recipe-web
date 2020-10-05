import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MdHome } from "react-icons/md";

import { RecipeContext } from '../context/context'
import Loader from '../components/Loader'



function RecipeDetail({ match }) {

    const { recipeInfo, getInfo } = React.useContext(RecipeContext)
    const recipe = recipeInfo;

    useEffect(() => {
        getInfo(match.params.id)
    }
    ,[match.params.id])

    return (
        !recipe ? <Loader /> :
            <Wrapper >
                <header className='detail-header'>
                    <Link to='/' className='link'>
                        <MdHome className='home-icon'/>
                    </Link>
                    <h2 className='detail-title'>{recipe.label.length < 30 ? recipe.label : null}</h2>
                </header>
                <div className='detail-div'>
                    <div className='list-div'>
                        <h2 className='yield'>Ingredients for {recipe.yield} servings :</h2>
                        <ul className='ingred-list'>
                            {recipe.ingredientLines.map((ingred, index) => <li className='ingred-item' key={index}>{ingred} <hr></hr> </li> )}
                        </ul>
                    </div>
                    <div className='info-div'>
                        <h2 className='info-title'>{recipe.label}</h2>
                        <img className='info-img' src={recipe.image} alt='recipe-img' />
                        <h3 className='info-calori'> <span className="info-calori-span">Total Calories: </span>{recipe.calories.toFixed(2)}</h3>
                        <button className="info-url-btn"><a href={recipe.url} className='info-url-anchor'>Recipe URL</a></button>
                    </div>
                </div>
            </Wrapper>
    )
}

const Wrapper = styled.div`
font-family:'Lato', sans-serif;
hr{
    opacity:0.195;
}
.detail-header{
    height: 9vh;
    background-color: tomato;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    position:relative;
}
.link{
    position:absolute;
    left:3%;
    transform:translateX(-50%);
}
.home-icon {
    color:white;
    font-size:2.2rem;
    padding-left:5px;
}
.detail-title{
    font-size:1.5rem;
    color:white;
    letter-spacing:0.085rem;
    position:absolute;
    left:50%;
    transform:translateX(-50%);
}
@media (max-width: 750px) {
.detail-title{
    font-size:1rem;
}
}
@media (max-width: 600px) {
.detail-title{
    font-size:1rem;
}
.yield {
    font-size:1.5rem;
}
.ingred-item{
    font-size: 1.25rem;
}
.home-icon {
    font-size:1.75rem;
}
}
@media (max-width: 530px) {
.detail-title{
    font-size:0.75rem;
}
.yield {
    font-size:1.25rem;
}
.ingred-item{
    font-size: 1rem;
}
.home-icon {
    font-size:1.25rem;
}
}
.detail-div{
    display: grid;
    grid-template-columns:repeat(auto-fit,  minmax(5rem, 30rem));
    gap: 2.5rem;
    margin: 4rem 2rem 1rem 2rem;
}
.yield{
    font-weight: 700;
    font-style: italic;
    font-size: 2rem;
}
.ingred-list{
    list-style:none;
    padding-left:0;
}
.ingred-item{
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
    font-weight: 400;
}

.info-title{
    font-size:2rem;
}
.info-img{
    text-align:center;
    border-radius:0.5rem;
    width:19rem;
}
.info-calori{
    font-weight:400;
}
.info-url-btn{
    color:white;
    background-color:tomato;
    outline:none;
    border:none;
    width:auto;
    height:auto;
    border-radius:0.5rem;
    text-transform:uppercase;
    box-shadow:0 0.1rem 5px rgba(0, 0, 0, 0.5);
}
.info-url-anchor{
    color:white;
    font-family:'Lato', sans-serif;
    font-weight:400;
    font-size:1.2rem;
    padding:2px 3px;
}
`
export default RecipeDetail