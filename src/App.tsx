import React from "react";
import logo from "./logo.svg";
import Signup from "./Conponent/Signup";
import LoginPage from "./Conponent/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agree from "./Conponent/Agree";
import SelectSch from "./Conponent/SelectSch";
import SearchAccount from "./Conponent/SearchAccount";
function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Agree" element={<Agree />} />
            <Route path="/SelectSch" element={<SelectSch />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="SearchAccount" element={<SearchAccount />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
