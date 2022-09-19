import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from "./NotFound";
import DummyComponent from "./DummyComponent";
import Counter from "./Counter";
import HomePage from "./HomePage";

const App = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/"/>
        <Route element={<Counter />} path="/counter"/>
        <Route element={<DummyComponent />} path="/dummy" />
        <Route element={<NotFound />} path="/404" />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
