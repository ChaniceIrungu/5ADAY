import React, { Component } from 'react'

const Season = ({image, title, description, list}) => {

return (

<div className="season">

<img className={image} src={image} alt=""/>
<h5 className="title">{title}</h5>
<p>{description}</p>

<ul>
<li><bold>{list}</bold></li>
</ul>
 
</div>

)



}
export default Season