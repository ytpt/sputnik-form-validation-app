import React  from "react";
import { StartPage } from "./pages/StartPage/StartPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import { RegistrationPage } from "./pages/RegistrationPage";
import { PasswordPage } from "./pages/PasswordPage";

function App() {

    const navigate = useNavigate();
    const handleModalBgClick = () => {
        navigate(-1);
    };

  return (
      <div className="App">
          <Routes>
              <Route exact path="/" element={ <StartPage /> } />
              <Route path="/password" element={ <PasswordPage handleModalBgClick={ handleModalBgClick } /> } />
              <Route path="/registration" element={ <RegistrationPage handleModalBgClick={ handleModalBgClick } /> } />
          </Routes>
      </div>
  );
}

export default App;
