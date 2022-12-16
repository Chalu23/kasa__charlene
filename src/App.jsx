import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/aPropos";
import FicheLogement from "./pages/FicheLogement";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* path="*" permet de renvoyé vers la page 404 
       */}
        <Route path="*" element={<ErrorPage />} />
        <Route path="/apropos" element={<Apropos/>} />
        <Route path="products/:productId" element={<FicheLogement />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
