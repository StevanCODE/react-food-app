import React from "react";
import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home";
import AdminPage from "./components/Pages/AdminPage";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='' element={<Home/> } > </Route>
        <Route exact path='/admin' element={<AdminPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
