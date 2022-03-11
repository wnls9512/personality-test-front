import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";

import Main from "./pages/Main.js";
import Login from "./pages/Login.js";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/login">
          <button>login</button>
        </Link>
      </header>
      <hr />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
