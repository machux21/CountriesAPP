//REACT, ROUTER
import React from "react";
import { Routes, Route } from "react-router-dom";

//CSS
import "./App.css";

//PAGES
import Home from "./components/MainComponents/Home.jsx";
import Index from "./components/MainComponents/Index.jsx";
import Form from "./components/MainComponents/Form.jsx";
import Country from "./components/MainComponents/Country.jsx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/country/:id" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
