import React from 'react'
import Input from '../../UI/Input'
import classes from "./MealItemForm.module.css"

const MealItemForm = ({id}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
      <Input label="Amount" input={{
        id:"amount_" + id,
        type:"number",
        min:'1',
        max:'99',
        step:"1",
        defaultValue:"1"
      }} />
      <button> + Add </button>
    </form>
  )
}

export default MealItemForm