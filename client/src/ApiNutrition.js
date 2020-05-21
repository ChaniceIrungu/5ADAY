import React, {useEffect, useState} from 'react'
import Nutrition from './Nutrition'

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

        <div>

            <form className="container text-center" onSubmit={getSubmit}>
                <input classname="form-control" type="text" placeholder="CALORIES"value={ingr} onChange={updateSubmit}/>
                <button classname="form-control" type="submit">Submit</button>
            </form>

            {Object.keys(nutritions).map(key => (<Nutrition 
            label={nutritions[key].label}
            quantity={nutritions[key].quantity}
            unit={nutritions[key].unit}
            
            />))}
           
            </div>
  
    )
}

export default ApiNutrition
