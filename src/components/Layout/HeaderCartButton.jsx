import React, {useContext, useEffect, useState} from 'react'
import GlobalStore from '../../store/global.store'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const store = useContext(GlobalStore)
  const { total } = store
  const [bump, setBump] = useState(false)
  useEffect(() => {
    setBump(true)
    const identifier = setTimeout(() => {
      setBump(false)
    },300)
    return () => clearTimeout(identifier)
  },[total])
  
  const clickHandler = () => {
    store.setShowModal(true)
  }
  return (
    <button className={`${classes.button} ${ bump ? classes.bump: ''}`} onClick={clickHandler}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{store.total}</span>
    </button>
  )
}

export default HeaderCartButton