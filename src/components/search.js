import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'
import styled from 'styled-components'

import { RecipeContext } from '../context/context.js'

const Search = () => {
    const { getRecipes, error } = React.useContext(RecipeContext)
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search) {
            getRecipes(search)
        }
    }

    return (
        <Wrapper >
            {error.show &&
                <ErrorWrapper>
                    <p>{error.msg}</p>
                </ErrorWrapper>
            }
            <form onSubmit={handleSubmit} className='form-control'>
                <MdSearch className='search-icon' />
                <input
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search Recipes'
                >
                </input>
                <button type='submit' className='btn'>Search</button>
            </form>
        </Wrapper>
    )
}
const Wrapper = styled.section`
position:relative;
width:50vw;
height:7vh;
display:grid;
    justify-content:center;
    align-items:center;

.form-control {
    height:6vh;
    width:50vw;
    display:grid;
    grid-template-columns: auto 1fr auto;
    align-items:center;
    justify-content:center;
    background-color:white;
    border-radius:0.5rem;
    padding:0rem 0.7rem;
    
}
.search-icon {
    height:4vh;
    font-size:1.5rem;
}
input {
    height:4vh;
    width:30vw;
    outline:none;
    font-size:1.1rem;
    font-family:'Lato', sans-serif;
    padding:0 0.7rem; 
    border:none;
    letter-spacing:0.1rem;
    text-transform:capitalize;
}
input::placeholder {
    
    text-transform:capitalize;
    letter-spacing:0.1rem;
}
button {
    height:4vh;
    width:auto;
    outline:none;
    font-size:1.1rem;
    font-family:'Lato', sans-serif;
    /* padding:0 0.5rem;  */
    border:none;
    letter-spacing:0.1rem;
    text-transform:capitalize;
    border-radius:0.5rem;
    background-color:tomato;
    color:white;
    box-shadow:0 0.1rem 5px rgba(0, 0, 0, 0.5);
}
button:hover {
    cursor:pointer;
}
@media (max-width: 500px) {
      button,
      input,
      .search-icon {
        font-size: 0.80rem;
      }
      .form-control{
          width:80vw;
      }
      input {
        width:40vw;
      }
    }
      @media (max-width: 350px) {
      button,
      input,
      .search-icon {
        font-size: 0.70rem;
      }
      
      } 
`;

const ErrorWrapper = styled.article`
  position: absolute;
  width:30vw;
  top: 0;
  left: 0;
  transform: translateY(85%);
  text-transform: capitalize;
  p {
    color:red;
    font-family:'Lato', sans-serif;
    letter-spacing:0.1rem;
    
  }
`;

export default Search