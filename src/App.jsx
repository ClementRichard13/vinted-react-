import { useState } from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Offer from "./pages/Offer";

import Header from "../src/Components/header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/offer/:id" element={<Offer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
