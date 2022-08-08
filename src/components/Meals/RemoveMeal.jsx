import React, {useState} from 'react'
import Input from '../UI/Input'
import classes from "../UI/Input.module.css"
import formClasses from "../Meals/MealItem/MealItemForm.module.css"

const RemoveMeal = (props) => {
const [mealUrl, setMealUrl] = useState("")
const handleChange = (e) => {
  setMealUrl(e.target.value)
}

const removeMealHandler = async (mealUrl) => {
  try{
    const response = await fetch(mealUrl, {
      method:"DELETE",
      header: {
        'Content-Type': 'application/json'
      },
      body: {}
    })
    const data = await response.json()
    console.log(data)
  }catch(err){
    console.log(err.message)
  }

}
const handleSubmit = (e) => {
  e.preventDefault()
  removeMealHandler(mealUrl);
  setMealUrl('')
}
  return (
    <form style={{marginTop:"2.5rem"}} onSubmit={handleSubmit} className={`${formClasses['form']} ${formClasses['form--left']}`}>
      <Input label="Meal Url:" onChange={handleChange} classes={classes['text-input']} input={{
        id:'meal-url',
        type:"text",
        value:mealUrl
      }} />
      <button>Remove meal</button>
    </form>
  )
}

export default RemoveMeal
