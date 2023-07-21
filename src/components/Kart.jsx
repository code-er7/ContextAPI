import React, { useContext, useEffect, useState } from "react";
import { CounterContext } from "./context/Counter";
import KartItem from "./KartItem";

const Kart = () => {
  const[totalAmount , setTotalAmount] = useState(0);
  const { kartItems, setKartItems } = useContext(CounterContext);
    useEffect(() => {
      let total = 0;
      kartItems.forEach((item) => {
        total += item.price * item.count;
      });
      setTotalAmount(total);
    }, [kartItems]);
  return (
    <div className="container">
      {kartItems.map((item, index) => {
        return (
          <KartItem
            key={index}
            name={item.name}
            price={item.price}
            count={item.count}
          />
        );
      })}
      <br />
      <div>
        <h1>Total</h1>
        <p>{totalAmount}</p>
      </div>
    </div>
  );
};

export default Kart;
