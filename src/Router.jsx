// /pages
import HomePage from "../src/pages/HomePage";
import AproposPage from "../src/pages/AproposPage";
import ProductPage from "../src/pages/ProductPage";
import Error404Page from "../src/pages/Error404Page";
// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// données pour la page A propos
import about from "./datas/about.json";
function router() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="products/:id" element={<ProductPage />}></Route>
        <Route path="/about" element={<AproposPage data={about} />}></Route>
        <Route path="*" element={<Error404Page />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default router;
