import React from 'react'
import styled from 'styled-components'
import Form from "../components/Form";
const Wrapper = styled.div`
grid-area: main;
background-color:#c9c9f2
`;

export default function Content() {
    return (
        <Wrapper>
        <Form />
            
        </Wrapper>
    )
}
