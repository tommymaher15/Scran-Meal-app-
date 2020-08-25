import React, {useState} from 'react'
import styled from 'styled-components'
import RecipeDetails from "./RecipeDetails";


const Recipe = ({recipe}) => {
    const {label, image, url, ingredients } = recipe.recipe;
    
   const [show, setShow] = useState(false);



    return (
        <Grid>
        <FlexWrapper>
        <Card>
        <Label>{label}</Label>

        <RecipeImg src = {image} alt = {label}></RecipeImg>
        <Button>
        <a href = {url} target = "blank" rel = "noopener noreferrer">More details</a>
        </Button>
  
        <Button onClick ={() => setShow(!show)}> Ingredients </Button>
        {show &&<RecipeDetails ingredients = {ingredients} />}
        </Card>
        </FlexWrapper>
        </Grid>
    )
}

export default Recipe


const Card = styled.div`
color:#f7f9fa;
background-color:#465ee8;
width:60%;
display:flex;
justify-content: center;
align-content:center;
flex-direction:column;
border-radius:3%;
margin:2em;



;



`;

const FlexWrapper = styled.div`

display:flex;
justify-content: center;

`;

const RecipeImg = styled.img`
 width: 100%;
  height: auto;

`;

const Label = styled.h2`
justify-content:center;

text-align: center;
`;



const Grid = styled.div`
display:grid;


`;


const Button = styled.button`
display: block;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: red;
  width: 400px;
  height: 70px;
  border-radius: 30px;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  background-size: 100% 100%;
  box-shadow: 0 0 0 7px red inset;
  margin-bottom: 15px;


align-self:center;

`;