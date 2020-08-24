import React from 'react';
import Header from "./containers/Header";
import GlobalStyles from "./styles/GlobalStyles";
import styled from 'styled-components'
import Content from "./containers/Content";

const Grid = styled.div`
display:grid;
grid-template-areas: "header"
                    "main"
`;



function App() {
  return (
    <Grid>
    <GlobalStyles />
    <Header />
    <Content />

  





  
    </Grid>
  );
}

export default App;
