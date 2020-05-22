import React from 'react'
import './App.css';
import style from './recipe.module.css'

const Recipe = ({title,ingredients,image,calories}) => {
    return (

        <div className={style.recipe}>
             <h1 >{title}</h1>
            <img className={style.image} src={image} alt=""/>
            <ul>
            {ingredients.map(ingredient => (
                <li key={ingredient.text}>{ingredient.text}</li>
            ))}
            </ul>
            <p><strong>Calories: </strong>{Math.round(calories)}</p>
           
        </div>
    )
}


export default Recipe