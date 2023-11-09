import React from "react";
import styles from "./App.module.css";
import SplashScreen from "./components/screens/SplashScreen";
import FormScreen from "./components/screens/FormScreen";
import SuccessScreen from "./components/screens/SuccessScreen";
import { Routes, Route, BrowserRouter } from "react-router-dom";


export function AppRoutes() {
  return (
    <div className={styles.mainContainer}>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/form" element={<FormScreen />} />
        <Route path="/success" element={<SuccessScreen />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;