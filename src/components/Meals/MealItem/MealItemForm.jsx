import React, { useContext, useState } from 'react'
import GlobalStore from '../../../store/global.store'
import Input from '../../UI/Input'
import classes from "./MealItemForm.module.css"

const MealItemForm = ({id,name,price,description}) => {
  const [amount, setAmount] = useState(1)
  const store = useContext(GlobalStore)
  const handleSubmit = (event) => {
    event.preventDefault();
    store.dispatchItem({type: "ADD_TO_CART", item:{
      id,
      name,
      quantity:Number(amount),
      price:price * Number(amount),
      description
    }})
    setAmount(1)
  }
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Input label="Amount" setAmount={setAmount} input={{
        id:"amount_" + id,
        type:"number",
        min:'1',
        max:'99',
        value:amount,
        step:"1"
      }} />
      <button> + Add </button>
    </form>
  )
}

export default MealItemForm