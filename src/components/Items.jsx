import React, { useContext } from 'react'
import Item from './Item'
import "./kart.css"
import { Link } from 'react-router-dom';
import { CounterContext } from './context/Counter'
const Items = () => {

  return (
    <div className='container'>
      <Item name={"MacbookPro"} price={150000} />
      <Item name={"Ipad"} price={70000} />
      <Item name={"IPhone"} price={50000} />
      <Item name={"IPencil"} price={20000} />
      <button><Link to={"/kart"}>Go To Kart</Link></button>
    </div>
  );
}

export default Items