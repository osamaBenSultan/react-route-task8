import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Login from "./pages/Login.jsx";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home.jsx";
import Register from "./pages/Register.jsx";

const AppContent = () => {
  const location = useLocation();
  const hideNavOnRoutes = ["/login", "/register"];
  const shouldHideNav = hideNavOnRoutes.includes(location.pathname);
  // const shouldHideNav = location.pathname.startsWith("/login") || location.pathname.startsWith("/register");

  return (
    <>
      {!shouldHideNav && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
