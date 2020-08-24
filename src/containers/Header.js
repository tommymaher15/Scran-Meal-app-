import React from 'react'
import styled from 'styled-components'

const Headbar = styled.header` 
width:100%;
background-color:#151559;
grid-area: header;
block-size: min(10vh);
color:#ccccd9;
box-shadow: 3px 4px 15px 0px rgba(0,0,0,0.44);
box-shadow: 3px 4px 15px 0px rgba(168,156,168,1);
display:flex;
align-items:center;
justify-content:center;
`;


export default function Header() {
    return (
       
        <Headbar>
<h1>Recipe Search!</h1>
        </Headbar>
      
    )
}