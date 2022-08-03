import React, { useEffect, useCallback, useContext} from 'react'
import GlobalStore from '../../store/global.store'
import Modal from '../UI/Modal'
import classes from "./Cart.module.css"
import CartItem from './CartItem'


const Cart = (props) => {

  const store = useContext(GlobalStore)
  const cartItems = <ul className={classes['cart-items']}>{store.cartItems.map(item =><CartItem key={item.id} id={item.id} name={item.name} quantity={item.quantity} price={item.price} description={item.description}  />)}</ul>
  const handleKeyDown = useCallback((event) => {
    if(event.key === 'Escape'){
      props.setShowModal(false)
    }
  },[props])

  const clickHandler = () => {
    props.setShowModal(false)
  }
  const clearCart = () => {
    store.dispatchItem({type:"DELETE_ALL"})
    store.total = 0
  }

  useEffect(() => {
    window.addEventListener('keydown',handleKeyDown)
    return () => window.removeEventListener('keydown',handleKeyDown)
  },[handleKeyDown])

  return (
    <Modal setShowModal={props.setShowModal} onBackDropClick={clickHandler}>
      <div className={classes.meals}>
        {store.cartItems.length === 0 ? <p style={{fontWeight:'bold', fontSize:'16px'}}>Your Cart Is Empty</p> : cartItems}
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${store.cartItems.map(item => item.price).reduce((a,b) => a + b,0).toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={clickHandler}>Close</button>
        <button className={classes['button--alt']} onClick={clearCart}>Clear Cart</button>
        <button className={`${classes.button} ${store.cartItems.length === 0 ? classes['button--disabled'] : ''}`} disabled={store.cartItems.length === 0}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart