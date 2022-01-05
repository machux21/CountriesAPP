import React from "react";

//COMPONENTS
import Cards from "../components/Cards.jsx";
import Filters from "../components/Filters.jsx";
import Pagination from "../components/Pagination.jsx";
import NavBar from "../components/NavBar.jsx";
export default function Home() {
  return (
    <>
      <NavBar />
      <Filters />
      <Cards />
      <Pagination />
    </>
  );
}
