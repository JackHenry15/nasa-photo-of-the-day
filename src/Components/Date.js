import React from 'react'
import styled from 'styled-components'
import Details from './Details'

const StyledDetails = styled.div`
    color: ${props => {
        return props.danger 
        ? props.theme.dangerColor 
        : props.theme.primaryColor
    }};
    font-weight: ${props => props.bold 
    ? 'bold' 
    : 'initial'
    };
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        color:${props => props.theme.secondaryColor};

        &:hover {
            background-color:${props => props.theme.primaryColor};
            transition: all 0.5s ease-in-out;
        }
        transition: all 0.5s ease-in-out;
    }

`

export default function Date({ info, action, action2, bold }){
    return(
    <StyledDetails bold={bold}>
    <h1>Today we are viewing....</h1>
    <h1>{info.title}</h1>
      <button onClick={() => action(info.date)}>
        See Image
      </button>
      <Details/>
      <button onClick={() => action2()}>
        Hide Image and Info
      </button>
    </StyledDetails>
    )
}