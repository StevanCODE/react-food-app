import React from 'react'
import classes from "./Card.module.css"
const Card = (props) => {
  return (
    <div className={props.classes ? props.classes : classes.card}>{props.children}</div>
  )
}

export default Card