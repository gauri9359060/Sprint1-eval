import React, { useState } from 'react'

const Tomato = () => {
    const [count , setCount] = useState(0);

    const handleChange =(val)=>{
        setCount(count + val)
    }

  return (
    <div>
    <h3>{`Tomatoes : ${count} kgs`} </h3>
      <button onClick={()=>handleChange(+1)}>+</button>
      <button onClick={()=>handleChange(-1)}>-</button>
    </div>
  )
}

export default Tomato