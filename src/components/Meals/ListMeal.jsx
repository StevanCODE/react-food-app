import React, { useState } from 'react'

const ListMeal = () => {
  const [mealUrls,setMealUrls] = useState([])

  const handleClick = () => {
    getMeals()
  }

  const getMeals = async (url) => {
    const response = await fetch('https://react-http-ae815-default-rtdb.europe-west1.firebasedatabase.app/meals.json')
    const data = await response.json()
    let urls = []
    for (let id in data){
      urls.push({
        url:`https://react-http-ae815-default-rtdb.europe-west1.firebasedatabase.app/meals/${id}.json`,
        id,
        name: data[id].name
    })
    }
    setMealUrls(urls)

  }

  return (
    <div>
      <ul>
        { mealUrls.length > 0 && mealUrls.map(meal => <li key={meal.id}>{meal.name}: {meal.url}</li>) }
      </ul>
      <button onClick={handleClick}> GET URLS </button>
    </div>
  )
}

export default ListMeal