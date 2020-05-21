import React, {useEffect, useState} from 'react'
import Nutrition from './Nutrition'

const API_ID = "27bc3ecd"
const API_KEY = "337d6212019594982a23a1e7c2f1078a"


const ApiNutrition = () => {




const [nutritions, setNutritions] = useState([])

useEffect( () => {
  
    
   getNutritions();
}, [])

const getNutritions = async () => {
    const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${API_ID}&app_key=${API_KEY}&ingr=1%20large%20apple`)
    const data = await response.json();
    setNutritions(data.totalNutrientsKCal)
    console.log(data.totalNutrientsKCal);
 
}


    return(

        <div>

            <form className="container text-center">
                <input classname="form-control" type="text" placeholder="CALORIES"/>
                <button classname="form-control" type="submit">Submit</button>
            </form>

            {Object.keys(nutritions).map(key => (<Nutrition 
            // label={key.ENERC_KCA.label}
            
            />))}
           
            </div>
  
    )
}

export default ApiNutrition
