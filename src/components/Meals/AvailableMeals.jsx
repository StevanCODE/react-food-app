import React, { useEffect, useState } from 'react'
import Card from '../UI/Card';
import classes from "./AvailableMeals.module.css"
import MealItem from './MealItem/MealItem';
import { getMeals } from '../../services';

const AvailableMeals = () => {
  const [mealsList, setMealsList] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  useEffect(() => {
    getMeals(setMealsList,setErrorMsg)
  },[])

  
  const meals = mealsList.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)
  console.log(mealsList)

  return <section className={classes.meals}>
    <Card>
      <ul>
        {meals.length > 0 ? meals : errorMsg !== '' ? <p>{errorMsg}</p>: <p> No meals loaded </p>}
      </ul>
    </Card>
  </section>
}

export default AvailableMeals