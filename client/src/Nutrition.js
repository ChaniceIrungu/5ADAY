import React from 'react'

const Nutrition = ({label, quantity, unit}) => {




  return(
      <div>
        <p>{label}</p>
  <p>{quantity}</p>
  <p>{unit}</p>
      </div>
  )



}
    



export default Nutrition