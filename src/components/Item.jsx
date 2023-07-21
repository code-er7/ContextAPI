import React, { useContext } from 'react'
import { CounterContext } from './context/Counter';

const Item = (props) => {
    const { kartItems, setKartItems } = useContext(CounterContext);
    const handleClick = ()=>{
        const existingItemIndex = kartItems.findIndex(
          (item) => item.name === props.name
        );

        if (existingItemIndex !== -1) {
          // If the item exists, increase its count
          const updatedItems = [...kartItems];
          updatedItems[existingItemIndex].count += 1;
          setKartItems(updatedItems);
        } else {
          const newItem = { name: props.name, price: props.price, count: 1 };
          setKartItems([...kartItems, newItem]);
        }
        console.log(kartItems);
    }
  return (
     <>
       <h2>{props.name}</h2>
       <p>{props.price}</p>
       <button onClick={handleClick}>ADD To Kart</button>
       <br />
     </>
  )
}

export default Item