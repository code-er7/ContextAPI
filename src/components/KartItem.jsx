import React, { useContext } from "react";
import { CounterContext } from "./context/Counter";

const KartItem = ({ name, price, count }) => {
  const { kartItems, setKartItems } = useContext(CounterContext);
  const handleIncrement = () => {
    const existingItemIndex = kartItems.findIndex((item) => item.name === name);
    const updatedItems = [...kartItems];
    updatedItems[existingItemIndex].count += 1;
    setKartItems(updatedItems);
  };
  const handleDecrement = () => {
    const existingItemIndex = kartItems.findIndex((item) => item.name === name);
    const updatedItems = [...kartItems];
    if (updatedItems[existingItemIndex].count == 1) {
      const newList = updatedItems.filter((item) => item.name != name);
      setKartItems(newList);
    } else {
      updatedItems[existingItemIndex].count -= 1;
      setKartItems(updatedItems);
    }
  };
  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <button onClick={handleIncrement}>+</button>
      <span>{count}</span>
      <button onClick={handleDecrement}>-</button>
    </>
  );
};

export default KartItem;
