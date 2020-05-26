import React, {useEffect, useState} from 'react'
import Nutrition from './Nutrition'
import Donut from './Donut'
import './App.css';

const API_ID = "a3b27ad9"
const API_KEY = "99c842cbb72db8ad195589bb293374db	"


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
         <h5>Track your nutrition</h5>
        <form className="text-center" onSubmit={getSubmit}>
            <textarea className="form-control mt-4" type="text" placeholder="Fruits & Vegetables" rows="4" cols="50" value={ingr} onChange={updateSubmit}/>
            <button className="form-control mt-4 btn btn-info" type="submit">ANALYZE</button>
        </form>

       

         {
    Object.keys(nutritions).map(key => 
        ['ENERC_KCAL'].includes(key) && 
        (
            <Nutrition
                label={nutritions[key].label}
                quantity={nutritions[key].quantity}
                unit={nutritions[key].unit}
            />
        )
    )          
}  
             <Donut data={[nutritions.FAT, nutritions.CHOCDF, nutritions.PROCNT, nutritions.SUGAR, nutritions.FASAT, nutritions.FIBTG]} />
       </div>
      
        </div>
  
    )
}

export default ApiNutrition