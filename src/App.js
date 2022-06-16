import React from 'react'
import CartItem from './CartItem'
import Cart from './Cart';
import Nav from './Nav'
import {useState} from 'react';

const  products =  [
    {
      price: 99,
      title: 'Watch',
      qty: 1,
      img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      id: 1
    },
    {
      price: 999,
      title: 'Mobile Phone',
      qty: 10,
      img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1306&q=80',
      id: 2
    },
    {
      price: 999,
      title: 'Laptop',
      qty: 4,
      img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80',
      id: 3
    }
  ]
      


function App() {

  
    const {list,setList } = useState(products);
    //console.log(list);

  const  handleIncreaseQuantity=(product) =>{
    console.log("click the button");
    console.log(list);
    //   const index = products.indexOf(product);
    //   console.log(index);
    //    products[index].qty +=1;

    //    setPdt({products});
  }

  const handleDecreaseQuantity =() =>{

  }
   
  const totalPrice = ()=>{

  }
     
  const deleteProduct = ()=>{

  }  
  const countproduct = function(){

  }   
//    pdt = products;
  return (
    <div>
        <Nav />
        {/* <div>{list}</div> */}
        <Cart products={list}  increase = { handleIncreaseQuantity}  decrease = {handleDecreaseQuantity}  totalprice = {totalPrice} removeproduct= {deleteProduct}/>
    </div>
  )
}

export default App