import styled from "styled-components";

export const AppHeader = styled.div`
background-color: #282c34;
display: flex;
flex-direction: row;
align-items: center;
min-height: 50px;
max-height: 50px;
font-size: calc(10px + 2vmin);
color: white;
`

export const AppLogo = styled.div`
    height: 40vmin;
    pointer-events: none;
`

export const HeaderLogoImg = styled.div`
height: 25px;
`
export const HeaderLogo = styled.div`
display: flex;
padding: 0 10px;
flex-wrap: nowrap;
flex-direction: row;
align-items: center;
justify-content: center;
`

export const HeaderLogoTxt = styled.div`
margin-left: 5px;
`