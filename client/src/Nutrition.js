import React from 'react'

const Nutrition = ({label, quantity, unit}) => {




  return(
      <div className="text-center mt-4">
        <p>{label}</p>
  <p>{quantity}</p>
  <p>{unit}</p>
    </div>
  )



}
    



export default Nutrition