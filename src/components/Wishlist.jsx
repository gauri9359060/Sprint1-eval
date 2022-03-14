import React, { useState } from "react";
import List from "./List";

const Wishlist = () => {
  const [item, setItem] = useState("");
  const [wish, setWish] = useState([]);

  const handleChange = (e) => {
    const { value } = e.currentTarget;
    setItem(value);
  };

  const handleAdd = () => {
    const payload = {
      title: item,
    };    
    let newWish = [...wish, payload];
    setWish(newWish);
    setItem("")
  };

  if(wish.length > 3){
      return(
        <h3>You cannot add more than 3 items to wishlist</h3>
      )
  }
  return (
    <div>
      <h1>Wishlist</h1>
      <input placeholder="Add Wish" onChange={handleChange} value={item} />
      <button onClick={handleAdd}>ADD</button>
    <div>
          {
            wish.map((item,id) => {
              return(
              <div key={id}>
                  <List title ={item.title}/>
             </div>
              )
            })
          }
      
    </div>
    </div>
  );
};

export { Wishlist };
