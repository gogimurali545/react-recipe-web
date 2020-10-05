import React, { useState } from 'react'

const RecipeContext = React.createContext();

const RecipeProvider = ({ children }) => {

    const [recipes, setRecipes] = useState([]);
    const [recipeInfo, setRecipeInfo] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({show:false, msg:''})

    const AppId = '99bbd6c4'
    const AppKey = '46b211adfde37932fe0f35edea72bafa'
    const rootUrl = 'https://api.edamam.com/search'

    const getRecipes = async (search) => {
        setIsLoading(true);
        setError({show:false, msg:''});
        await fetch(`${rootUrl}?q=${search}&app_id=${AppId}&app_key=${AppKey}`)
        .then(res => res.json())
        .then(data => data.hits.length === 0? setError({show:true, msg:'no such recipe exist!'}): setRecipes(data.hits))
        setIsLoading(false)
        
    }

    const getInfo = async (uri) => {
        setIsLoading(true);
        setRecipeInfo();
        await fetch(`${rootUrl}?r=${uri}&app_id=${AppId}&app_key=${AppKey}`)
        .then(res => res.json())
        .then(data => {
            const [recipe] = data;
            setRecipeInfo(recipe);
        })
        setIsLoading(false)
    }

    return (
        <RecipeContext.Provider value={{recipes, recipeInfo, isLoading, error, getRecipes, getInfo}}>
            {children}
        </RecipeContext.Provider>
    )

}

export { RecipeContext, RecipeProvider }