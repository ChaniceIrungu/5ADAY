import React, {useEffect, useState} from 'react'





const ApiNutrition = () => {

const API_ID = "27bc3ecd"
const API_KEY = "337d6212019594982a23a1e7c2f1078a"




useEffect( () => {
   getNutritions();
}, [])

const getNutritions = async () => {
    const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${API_ID}&app_key=${API_KEY}&ingr=1%20large%20apple`)
    const data = await response.json();
    console.log(data);
}
 



    return(

        <div>

            <form className="container text-center">
                <input classname="form-control" type="text" placeholder="CALORIES"/>
                <button classname="form-control" type="submit">Submit</button>
            </form>
            
        </div>
    )
}













export default ApiNutrition
