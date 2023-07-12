import Signup from "./Component/SignupPage/Signup";
import LoginPage from "./Component/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agree from "./Component/AgreePage/Agree";
import SelectSch from "./Component/SelectSchPage/SelectSch";
import SearchAccount from "./Component/SearchAccount/SearchAccount";
import SearchAccountAuth from "./Component/SearchAccount/SearchAccount";
import MainApp from "./Component/MainPage/MainApp";

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
            <Route path="/SearchAccount" element={<SearchAccount />} />
            <Route path="/SearchAccountAuth" element={<SearchAccountAuth />} />
            <Route path="/MainPage" element={<MainApp />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
