import React, { useState } from "react";
import styles from "./App.module.css";
import SplashScreen from "./components/screens/SplashScreen";
import FormScreen from "./components/screens/FormScreen";
import SuccessScreen from "./components/screens/SuccessScreen";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className={styles.mainContainer}>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/form" element={<FormScreen />} />
            <Route path="/success" element={<SuccessScreen />} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
