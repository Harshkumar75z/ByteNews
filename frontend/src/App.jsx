import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Bookmarks from "./pages/Bookmarks";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <BrowserRouter>
      {isLogin && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth"
          element={<Auth setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
