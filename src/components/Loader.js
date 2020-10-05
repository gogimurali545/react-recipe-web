import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FaSpinner } from "react-icons/fa";



const Loader = () => {
    return (
        <Wrapper>
            <FaSpinner className='loading-img'></FaSpinner>
        </Wrapper>
    )
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`

.loading-img{
  width:15rem;
  height:15rem;
  color: tomato;
  display: block;
  margin: 0 auto;
  margin-top: 10rem;
  animation: ${rotate} 2s linear infinite;
}
`;



export default Loader