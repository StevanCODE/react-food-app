import React from 'react'
import CartItemControls from './CartItemControls'
import classes from "./Cart.module.css"


const CartItem = ({name,description,price,quantity,id}) => {
  return (
    <li style={{display:'flex', justifyContent:"space-between", alignItems:"flex-end"}} key={id}>
    <div>
      <h3>{name}</h3>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>{price.toFixed(2)}</div>
    </div>
    <CartItemControls id={id} quantity={quantity} price={price} />
    </li>
    )
}

export default CartItem