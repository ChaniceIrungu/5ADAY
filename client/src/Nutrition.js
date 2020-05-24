import React from 'react'


const Nutrition = ({label, quantity, unit}) => {




  return(

<div className="bg-light">
      <div className="text-center mt-4 container-fluid">
<div className="nutrition">
  
  <h5><strong>{label}</strong></h5>
  <p>{quantity}</p>
  <p>{unit}</p>
  </div>
    </div>
   
    </div>
    
  )



}
    



export default Nutrition