import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Header/>
      <div>
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
