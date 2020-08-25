import React from 'react'
import styled from 'styled-components'

const Alert = ({alert}) => {
    return (
        <Alert1>
            <h3>{alert}</h3>
        </Alert1>
    )
}

export default Alert


const Alert1 = styled.div`
  position: absolute;
  top:10em;
  left: 0;
  background-color: rgb(233, 72, 72);
  width: calc(100% - 0.4rem);
  border-radius: 0.5rem;
  padding: 0.2rem;


`;