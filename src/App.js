import React, { useContext } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import GlobalStore from "./store/global.store";

function App() {
  const store = useContext(GlobalStore)

  return (
    <>
      <Header/>
      <main>
        <Meals/>
        { store.showModal && <Cart setShowModal={store.setShowModal} />}
      </main>
    </>
  );
}

export default App;
