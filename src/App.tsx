import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { AppRoutes } from "./component/AppRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
