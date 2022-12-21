// /pages
import React from "react";
import HomePage from "../../pages/HomePage";
import AproposPage from "../../pages/AproposPage";
import ProductPage from "../../pages/ProductPage";
import Error404Page from "../../pages/Error404Page";

import {  Route, Routes } from "react-router-dom";

// données pour la page A propos

import about from "../../datas/about.json";
function Routeur() {
  return (
    
    
    <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="products/:id" element={<ProductPage />}></Route>
    <Route path="/about" element={<AproposPage data={about} />}></Route>
    <Route path="*" element={<Error404Page />}></Route>
    </Routes>
    
    );
  }
  
  export default Routeur;