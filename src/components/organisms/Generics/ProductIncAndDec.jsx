import React from 'react';
import { addDataToCart, decreaseItemFromCart } from '../../../store/actions';

const ProductIncAndDec = ({ currentProduct }) => {
  return (
    <div style={ButtonStyle}>
      <button onClick={() => decreaseItemFromCart(currentProduct)} style={ButtonStyle.decBtn}>
        -
      </button>
      <div style={ButtonStyle.valueStyle}>{currentProduct?.cartQuantity}</div>
      <button onClick={() => addDataToCart(currentProduct)} style={ButtonStyle.incBtn}>
        +
      </button>
    </div>
  );
};

const ButtonStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#018ca4',
  color: '#ffffff',
  padding: '7px',
  decBtn: {
    padding: '2px 10px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#049fba',
    color: '#ffffff'
  },
  valueStyle: {
    padding: '0 10px'
  },
  incBtn: {
    padding: '0 10px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#049fba',
    color: '#ffffff'
  }
};

export default ProductIncAndDec;
