//REACT, ROUTER
import React from "react";
import { Routes, Route } from "react-router-dom";

//CSS
import "./App.css";

//PAGES
import Home from "./pages/Home.jsx";
import Index from "./pages/Index.jsx";
import Form from "./pages/Form.jsx";
import Detail from "./pages/Detail.jsx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/dog/:name" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
