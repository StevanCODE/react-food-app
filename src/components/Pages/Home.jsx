import React, { useContext } from 'react'
import GlobalStore from '../../store/global.store'
import Cart from '../Cart/Cart'
import Meals from '../Meals/Meals'

const Home = () => {
  const store = useContext(GlobalStore)
  return (
  <main>
    <Meals/>
    { store.showModal && <Cart setShowModal={store.setShowModal} />}
  </main>
  )
}

export default Home