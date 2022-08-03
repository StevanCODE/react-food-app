import React, { useContext } from 'react'
import GlobalStore from '../../store/global.store'
import classes from "./CartItemControls.module.css"
const CartItemControls = ({id, quantity}) => {
  const store = useContext(GlobalStore)

  const handleDecrement = () => {
    store.dispatchItem({type:"DECREMENT", id, quantity})
  }

  const handleIncrement = () => {
    store.dispatchItem({type:"INCREMENT", id, quantity})
  }

  const handleDelete = () => {
    store.dispatchItem({type:"REMOVE_ITEM", id, quantity})
  }

  return (
    <div className={classes.controls}>
      <div className={classes['button-container']}>
        <button className={classes.buttons} onClick={handleDecrement}> - </button>
        <p className={classes.quantity}>{quantity}</p>
        <button className={classes.buttons} onClick={handleIncrement}> + </button>
      </div>
      <button className={classes.remove} onClick={handleDelete} style={{cursor:'pointer'}}> Remove Item </button>
    </div>
  )
}

export default CartItemControls