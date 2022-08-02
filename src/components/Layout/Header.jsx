import React from 'react'
import classes from "./Header.module.css"
import mealsImage from "../../assets/meals.jpeg"
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
      <header className={`${classes.header}`}>
        <h1 className={classes.header__title}>React Meals</h1>
        <div>
          <HeaderCartButton></HeaderCartButton>
        </div>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="meals"></img>
      </div>
    </>
  )
}

export default Header