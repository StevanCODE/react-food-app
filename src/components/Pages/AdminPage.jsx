import React from 'react'
import { AddMeals } from '../Meals/AddMeals'
import  RemoveMeal  from '../Meals/RemoveMeal'
import ListMeal from '../Meals/ListMeal'
import Card from '../UI/Card'
import classes from "../UI/Card.module.css"
import {Link} from "react-router-dom"

const AdminPage = () => {
  return (
    <div style={{marginTop:"2rem", display:"flex", justifyContent:'center'}}>
      <Card classes={`${classes.card} ${classes['card--admin']}`}>
        <div style={{display:"flex", justifyContent:"flex-end", marginBottom:"1rem", fontWeight:"bold"}}>
          <Link to="/">Back</Link>
        </div>
        <AddMeals/>
        <RemoveMeal/>
        <ListMeal/>
      </Card>
    </div>
  )
}

export default AdminPage