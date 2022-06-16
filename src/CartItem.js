import React from 'react'
import {useState} from 'react';
function CartItem({product,image,quantity,price,title,increase,decrease,removeproduct}) {
    console.log(product);

  return (
    <div className="cart-item">
        <div className="left-block">
        <img style={styles.image} src={image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>{price} </div>
          <div style={ { color: '#777' } }>Qty: {quantity} </div>
          
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
            onClick={()=>{increase(product)}}
            />
            <img
              alt="decrease"
              className="action-icons"
            //   src="https://www.flaticon.com/free-icon/minus_992683?term=mhttps://cdn-icons-png.flaticon.com/128/992/992683.pnginus&page=1&position=2&page=1&position=2&related_id=992683&origin=search"
             // onClick={decrease(product)}
               src='https://cdn-icons-png.flaticon.com/128/992/992683.png'
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
            />
          </div>
        </div>
      </div>
  )
}
  const styles = {
    image : {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
  }
export default CartItem;