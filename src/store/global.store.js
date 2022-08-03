import React, { useState, useReducer } from "react"


const GlobalStore = React.createContext({showModal:false, setShowModal:() => null, cartItems:[], dispatchItem:() => null, total:0})

function cartReducer(state,action){
  switch(action.type){
    case "ADD_TO_CART":
      if(state.items.some(item => item.id === action.item.id)){
        const addedTotal = state.total + action.item.quantity;
        const addedItems = state.items.map(item => {
          if(item.id === action.item.id){
            item.price += Number(action.item.price);
            item.quantity += action.item.quantity;
            return item 
          }
          else return item
        })
        return {total:addedTotal, items:addedItems
      }}
      else {
        const items = state.items.concat(action.item)
        const total = state.total + action.item.quantity
        return {total, items}
      }
    case "REMOVE_ITEM":
      const totalRemoved = state.total - action.quantity
      const filteredItems = state.items.filter(item => item.id !== action.id)
      return {total:totalRemoved, items:filteredItems}
    case "INCREMENT":
      const incrementedItems = state.items.map(item => {
        if(item.id === action.id){
          item.price += parseFloat((item.price / item.quantity).toFixed(2))
          if(item.quantity <= 98){
            item.quantity += 1
          }
          return item
        }
        else return item
      }).filter(Boolean)
      const incrementedTotal = state.total + 1
      return {total:incrementedTotal,items:incrementedItems}
    case "DECREMENT":
        const decrementedItems = state.items.map(item => {
          if(item.id === action.id){
            item.price -= parseFloat((item.price / item.quantity).toFixed(2))
            item.quantity -= 1
            if(item.quantity <= 0){
              return null
            }
            return item
          }
          else return item
        }).filter(Boolean)
        const decrementedTotal = state.total - 1;
        return {total:decrementedTotal ,items:decrementedItems}
    case "DELETE_ALL":
      return {total:0, items:[]}
    default:
      return state
  }
}

export const GlobalStoreContext = (props) => {
  const [showModal,setShowModal] = useState(false)
  const [cartItems,dispatchItem] = useReducer(cartReducer, {total:0, items:[]})

  return (
    <GlobalStore.Provider value={{ showModal, setShowModal, cartItems: cartItems.items, dispatchItem, total: cartItems.total}}>
    {props.children}</GlobalStore.Provider>
  )
}

export default GlobalStore