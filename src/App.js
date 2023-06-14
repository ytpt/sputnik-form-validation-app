import React from "react";
import { StartPage } from "./pages/StartPage/StartPage";
import { Route, Routes } from "react-router-dom";
import { RegistrationPage } from "./pages/RegistrationPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={ <StartPage /> } />
              <Route path="/password" element={ <ForgotPasswordPage /> } />
              <Route path="/registration" element={ <RegistrationPage /> } />
          </Routes>
      </div>
  );
}

export default App;
