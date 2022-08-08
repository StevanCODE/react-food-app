import React from 'react'
import classes from "./Input.module.css"

const Input = (props) => {
  return (
    <div className={props.classes ? props.classes : classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} onChange={props.onChange}/>
    </div>
  )
}

export default Input