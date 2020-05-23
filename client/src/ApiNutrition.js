import React, {useEffect, useState} from 'react'
// import Nutrition from './Nutrition'
import Donut from './Donut'
import './App.css';

const API_ID = "27bc3ecd"
const API_KEY = "337d6212019594982a23a1e7c2f1078a"


const ApiNutrition = () => {




const [nutritions, setNutritions] = useState([])
const [ingr, setSubmit] = useState('')
const [inquiry, setInquiry] = useState('1 apple')

useEffect( () => {

    const getNutritions = async () => {
        const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${API_ID}&app_key=${API_KEY}&ingr=${inquiry}`)
        const data = await response.json();
        setNutritions(data.totalNutrients)
        console.log(data.totalNutrients);
     
    }
    
   getNutritions();
}, [inquiry])


const updateSubmit = e => {
    setSubmit(e.target.value)
    // console.log(ingr)
}

const getSubmit = e => {

  e.preventDefault();
  setInquiry(ingr)

}


    return(

        <div className="bg-light">

        <div className="container">
         <h5 className="mt-4">Nutrition</h5>
        <form className="text-center" onSubmit={getSubmit}>
            <textarea className="form-control mt-4" type="text" placeholder="Ingredients list" rows="4" cols="50" value={ingr} onChange={updateSubmit}/>
            <button className="form-control mt-4 btn btn-info" type="submit">ANALYZE</button>
        </form>

        {Object.keys(nutritions).map(key => (<Donut
        label={nutritions[key].label}
        quantity={nutritions[key].quantity}
        unit={nutritions[key].unit}
        
        />))}
       </div>
      
        </div>
  
    )
}

export default ApiNutrition
