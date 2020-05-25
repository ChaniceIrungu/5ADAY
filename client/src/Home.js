import React from 'react'

const Home = () => {

    const header = "5 Daily and more... Reach your Goal";
    const image = "https://s.yimg.com/ny/api/res/1.2/UYVqvhuvJILX8ZwNmKv3vA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNy4xMzA0MzQ3ODI2MDg3/https://s.yimg.com/uu/api/res/1.2/DHKgUr4Y2ZVMFXRFU8BSiw--~B/aD00OTEyO3c9NzM2MDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2019-11/52156a40-febd-11e9-bd15-10cdaf10fa92";

    return (
      
        <div className="text-center bg-light ">

  

 
        <img src={image} alt="" />
        
        <h2 className="mt-4">{header}</h2><br></br>
              
            
      </div>       
    )
}

export default Home