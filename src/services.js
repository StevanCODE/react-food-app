export async function getMeals(updateMeals, updateError){
  try{
    const response = await fetch('https://react-http-ae815-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
    if(!response.ok){
      throw new Error('Error Getting Data')
    }
    else if(response.ok){
      const data = await response.json()
      let meals = []
      for (let meal in data){
        meals.push(data[meal])
      }
      if(meals !== null && meals.length > 0 ){
        updateMeals(meals)
      }
      else{
        throw new Error('Error Getting Data')
      }
    }
    
  }
  catch(err){
    updateError(err.message)
  }
}