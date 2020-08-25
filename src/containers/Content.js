import React from 'react'
import styled from 'styled-components'
import Form from "../components/Form/Form";


const Wrapper = styled.div`
grid-area: main;
background-color:#f5e7e1;
block-size:100%;
display:flex;
align-items:center;
justify-content:center;
`;

export default function Content() {

    


    return (
        <div>
        <Wrapper>
        <Form />
            
        </Wrapper>
        </div>
    )
}
