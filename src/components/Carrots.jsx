import React, { useState } from 'react'

const Carrots = () => {
    const [count , setCount] = useState(0);

    const handleChange =(val)=>{
        setCount(count + val)
    }

  return (
    <div>
    <h3>{`Carrots : ${count} kgs`} </h3>
      <button onClick={()=>handleChange(+1)}>+</button>
      <button onClick={()=>handleChange(-1)}>-</button>
    </div>
  )
}

export default Carrots