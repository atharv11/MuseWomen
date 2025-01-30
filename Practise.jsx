import React, { useState } from 'react'

const Practise = () => {
const arrs =["Banana","grape" ,"mango"]
  return (
    <div>
      <ul>
         {arrs.map((arr,index)=>(
           <li key={index}>{arr}</li>
        ))}
        
      </ul>
     </div>
  )
}

export default Practise