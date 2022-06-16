import React from 'react'
import CartItem from './CartItem';

function Cart({products,increase,decrease,totalprice,removeproduct}) {
    return (
        <div className="cart">
          {products.map((product) => {
            return (
              <CartItem
                product={product}
                key={product.id}
                image = {product.img}
                quantity = {product.qty}
                price = {product.price}
                title= {product.title}
                increase = {increase}
                decrease = {decrease}
                removeproduct = {removeproduct}
              
              />
            )
          })}
        </div>
      );
    
}

export default Cart   ;