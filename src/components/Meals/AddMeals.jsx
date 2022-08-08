import React, {useReducer} from 'react'
import Input from '../UI/Input'
import classes from "../UI/Input.module.css"
import formClasses from "../Meals/MealItem/MealItemForm.module.css"

function mealReducer(state,action) {
  switch(action.type){
    case "ADD_ID":
      return { id:action.id, name:state.name, description:state.description, price:state.price}
    case "ADD_NAME":
      return { id:state.id, name:action.name, description:state.description, price:state.price}
    case "ADD_DESCRIPTION":
      return { id:state.id, name:state.name, description:action.description, price:state.price}
    case "ADD_PRICE":
      return { id:state.id, name:state.name, description:state.description, price:action.price}
    case "RESET_MEAL":
      return { id:'', name:'', description:'', price:0}
    default:
      return state
  }
}

export const AddMeals = (props) => {
  const [meal, dispatchMealItem] = useReducer(mealReducer, {id:'', name:'', description:'', price:0})

  const handleNameChange = (e) => {
    dispatchMealItem({type:"ADD_NAME", name:e.target.value})
  }

  const handleIDChange = (e) => {
    dispatchMealItem({type:"ADD_ID", id:e.target.value})
  }

  const handleDescriptionChange = (e) => {
    dispatchMealItem({type:"ADD_DESCRIPTION", description:e.target.value})
  }

  const handlePriceChange = (e) => {
    dispatchMealItem({type:"ADD_PRICE", price:e.target.value})
  }

const addMeal = async (meal) => {
  const response = await fetch('https://react-http-ae815-default-rtdb.europe-west1.firebasedatabase.app/meals.json', {
    method:"POST",
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(meal)
  })
  const data = await response.json()
  console.log(data)
}

const handleSubmit = (e) => {
  e.preventDefault()
  addMeal(meal);
  dispatchMealItem({type:"RESET_MEAL"})
}


  return (
    <form onSubmit={handleSubmit} className={`${formClasses['form']} ${formClasses['form--left']}`}>
      <Input label="Meal Name:" onChange={handleNameChange} classes={classes['text-input']} input={{
        id:'meal-name',
        type:"text",
        value:meal.name
      }} />
      <Input label="Meal Description:" onChange={handleDescriptionChange} classes={classes['text-input']}  input={{
        id:'meal-description',
        type:"text",
        value:meal.description
      }} />
      <Input label="Meal ID:" onChange={handleIDChange} classes={`${classes['text-input']} ${classes['text-input--id']}`}  input={{
        id:'meal-id',
        type:"text",
        value:meal.id
      }} />
      <Input label="Meal Price:" onChange={handlePriceChange} classes={`${classes['text-input']} ${classes['text-input--price']}`} input={{
        id:'meal-price',
        type:"number",
        value:meal.price
      }} />
      <button>Add meal</button>
    </form>
  )
}
