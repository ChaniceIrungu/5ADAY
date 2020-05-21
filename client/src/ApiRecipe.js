import React, {useEffect, useState} from 'react';

import './App.css';
import Recipe from "./Recipe"

const Api = () => {

const APP_ID = "f306dbf4";
const APP_KEY = "b44d9e2b3d833c866f2104b0189893a7";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('smoothies')


useEffect(  () => {

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    
 }
    
    getRecipes();
  }, [query, ]);

  


const updateSearch = e =>  {
  setSearch(e.target.value);
 
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search)
}



  return(

    <div className="App">
      
       <form onSubmit={getSearch}className="container">
         <input className="mt-4 form-control" type="text" value={search} onChange={updateSearch}/>
  <button className="mt-4 mb-4 btn btn-info form-control" type="submit">Search</button>
       </form>
       <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.label}
          title={recipe.recipe.label} image={recipe.recipe.image} 
          ingredients={recipe.recipe.ingredients}calories={recipe.recipe.calories}
          />
        ))}
        </div>
    </div>
  )
}
  

export default Api;
