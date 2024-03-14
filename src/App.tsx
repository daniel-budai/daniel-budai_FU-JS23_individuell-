import "./App.css";
import "./sass/_index.scss";

import Landing from "./pages/Landing/Landing";
import Navigation from "./pages/Navigation/Navigation";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Status from "./pages/Status/Status";
import CartPage from "./pages/CartPage/CartPage";
import LogInPage from "./pages/LogIn/LogInPage";
import ProfilePage from "./pages/Profile/ProfilePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/status" element={<Status />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
