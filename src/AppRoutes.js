import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SecondPage from "./components/SecondPage";
import HomePage from "./components/HomePage";

const AppRoutes = () => {
  const [isName, setIsName] = useState(false);
  const Private = ({ children }) => {
    if (isName === false) {
      return <Navigate to="/" />;
    }

    return children;
  };

  const eName = (eName) => {
    setIsName(eName);
  };

  console.log(isName);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage eName={eName} />} />
        <Route exact path="/SecondPage" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
