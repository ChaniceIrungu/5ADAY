import React from 'react'

const Nutrition = ({label, quantity, unit}) => {




  return(

<div className="bg-light">
      <div className="text-center mt-4 container-fluid">
<div className="nutrition">
        <p className="mb-2 mt-4"><strong>{label}</strong></p>
  <p>{quantity} {unit}</p>
  </div>
    </div>
    </div>
  )



}
    



export default Nutrition