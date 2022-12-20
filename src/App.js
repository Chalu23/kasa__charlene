import React from "react";


import Routeur from "./components/Routeur/routeur";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {
  return (
    <div>
      <div className="appPageContainer">
        <Header />
        <div className="routerFormat">
          <Routeur />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
