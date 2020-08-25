import React, {useState} from 'react';
import Header from "./containers/Header";
import GlobalStyles from "./styles/GlobalStyles";
import styled from 'styled-components'
//import Content from "./containers/Content";
import Axios from 'axios';
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";
// unique key per request? look more into this one. 
import { v4 as uuidv4 } from 'uuid';

const APP_ID = "b11191fb";

const APP_KEY = "95f4eb4ca3190d7735408386837b6fb2	";



function App() {
// search query state and sets it as a blank string
  const [query, setQuery] = useState("");
  // display recipes state 
 //JSON is accessed by using an array 
 const [recipes, setRecipes] = useState  ([]);

// alert state. 
 const [alert, setAlert] = useState("");



const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}
&from=0&to=6&calories=591-722&health=alcohol-free`;


const onChange = (e) => {
  // set query is equal to the event // this sets querys state and then query is the request. this is done first before the api call
setQuery(e.target.value);
}



// this is the function to get the URL and make the request!
const getData = async() => {

  if (query !== "")// if statement with the response, to handle the errors if no string is entered. display the alert
  {const result = await Axios.get(url);
    if(!result.data.more){
      return setAlert("No Food with Such name. Please try again!")
    }
    setRecipes(result.data.hits)
    console.log(result)
    setAlert("");
    setQuery("");
    } 
    else{
      setAlert("Please Fill the form");

    };

};
// on submit, we get the Data through the form!
// on submit runs the getData function and it runs onSubmit of the input.    e = event  

const onSubmit = (e) => {
  // this is to prevent the form from submitting on enter. 
e.preventDefault();
// on submit will run the get data function that was declared above! 
getData();

};





  return (
    <Grid>
    <GlobalStyles />
    <Header />
    <Search>
    
    <Form onSubmit = {onSubmit}> 
    {alert !== "" &&<Alert alert = {alert} />}
    <Input1 type = "text" placeholder = "Search food" autocomplete = "off" onChange={onChange} value = {query}></Input1>
    <input type = "submit" value = "search"></input>
    </Form>
    </Search>
    <Recipes>
       
       
       {recipes !== [] && recipes.map
       (recipe =>
             <Recipe key={ uuidv4} recipe={recipe} />
       
       )}
      
  


    </Recipes>




  
    </Grid>
  );
}

export default App;



const Grid = styled.div`
 block-size: min(100vh);
 display:grid;
 grid-template-areas:
 " header "
 "  main  ";

 grid-template-rows: min-content 1fr;
`;


const Recipes = styled.div``;

const Search = styled.div`
display:flex;
justify-content:center;
align-items:flex-start;

`;


const Input1 = styled.input`
  
;`;

const Form = styled.form`




`;