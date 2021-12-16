import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Albums from "./pages/Albums";
import Login from "./components/shared/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

// GET URL PARAM CALLED CODE
const code = new URLSearchParams(window.location.search).get("code");

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={code ? <Albums code={code} /> : <Login />} />
        {/* <Route
          path="/search"
          element={code ? <Dashboard code={code} /> : <Login />}
        /> */}
        <Route path="/search" element={<Dashboard code={code} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
