import React from 'react'
import './App.css';

const Season = ({image, title, description, list}) => {

return (

<div>

<div className="card">
   
    <div className="card-body">
<h5 className="card-title title">{title}</h5>
<p className="card-text">{description}</p>
<img className="card-img-top" src={image} alt=""/>

      <ul className="card-text mt-4"><li>{list.replace(/,/g," ")}</li>
      </ul>
    </div>
  </div>
 


 
</div>

)



}
export default Season