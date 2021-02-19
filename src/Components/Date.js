import React from 'react'
import styled from 'styled-components'
import Details from './Details'

const StyledDetails = styled.div`
    font-weight: ${props => props.bold 
    ? 'bold' 
    : 'initial'
    };
    background-color: royalblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .header h1 {
        color: ${props => props.theme.tertiaryColor};
    }
    p {
    width: 90%;
    }
    img {
    width: 75%;
    }
    a:hover{
        color: ${props => props.theme.tertiaryColor};
    }

`

export default function Date({ info, action, action2, bold }){
    return(
    <StyledDetails bold={bold}>
        <div className='header'>
            <h1>Nasa Photo of the Day</h1>
            <h1>Today we are viewing....</h1>
            <h1>{info.title}</h1>
        </div>
        <Details/>
    </StyledDetails>
    )
}