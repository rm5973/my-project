import { useState } from "react"
import React from "react"
import testimonials from "../img/testimonials-3.jpg"
 function Card()
{
    const[text,setText]=useState("wbwuebwue ")
return(<div class=" mx-auto max-w-[18rem] " >
    
    <img className=" w-[5vwvw] h-[5vw] text-black rounded-[150px]" src={testimonials}  alt="no image found " />
    <h5>Sarah W.</h5>
    <p  onMouseEnter={()=>{
        setText("laudalasson")

    }}
    
    onMouseLeave={()=>{
        setText("wbwuebwue")
    }}>{text}</p>
</div>
)

}export default Card