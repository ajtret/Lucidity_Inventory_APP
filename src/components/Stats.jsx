// src/components/Stats.js
import React from 'react';
import { useSelector } from 'react-redux';
import { BsCart2 } from "react-icons/bs"
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { FaShapes } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import './Stats.css';

const Stats = () => {
  const { totalProducts, totalValue, outOfStock, categories } = useSelector(state => state.stats);

  return (
    <div className="stats-container">
      <div className="stat">
        <div className='row'>
          <BsCart2 style={{ 'padding': '10px', fontSize: '30px', color: 'white' }} />
          <h2>Total Products</h2>
        </div>
        <p>{totalProducts}</p>
      </div>
      <div className="stat">
        <div className='row'>
          <FaSackDollar style={{ padding: '10px', fontSize: '30px', color: 'white' }} />
          <h2>Total store value</h2>
        </div>
        <p>${totalValue}</p>
      </div>
      <div className="stat">
        <div className='row'>
          <MdOutlineRemoveShoppingCart style={{ padding: '10px', fontSize: '30px', color: 'white' }} />
          <h2>Out of Stocks</h2>
        </div>
        <p>{outOfStock}</p>
      </div>
      <div className="stat">
        <div className='row'>
          <FaShapes style={{ padding: '10px', fontSize: '30px', color: 'white' }} />
          <h2>No of Category</h2>
        </div>
        <p>{categories}</p>
      </div>
    </div>
  );
};

export default Stats;
