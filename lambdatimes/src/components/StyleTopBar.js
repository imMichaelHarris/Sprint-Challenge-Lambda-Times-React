import React from 'react'
import styled, {css} from 'styled-components'

export const StyledTopBar = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
z-index: 100;

background-color: #333;
`
export const Container = styled.div`
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
@media (min-width: 1280px) {
    width: 1280px;
}

${props => props.left && css`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
span{
    cursor: pointer;
  margin-right: 25%;
  font-weight: bold;  
}
`} 

${props => props.center && css`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
span {
    cursor: pointer;
    margin-right: 5%;
    &:hover{
        text-decoration: underline;

    }
}
span:last-child {
    margin-right: 0;
}
`}

${props => props.right && css`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;
span {
    cursor: pointer;

}
`}
`