import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Albums from "./pages/Albums";
import Dashboard from "./pages/Dashboard";
import Login from "./components/shared/Login";
import NotFound from "./pages/NotFound";

const code = new URLSearchParams(window.location.search).get("code");

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={code ? <Dashboard code={code} /> : <Login />}
        />
        <Route path="/albums" element={<Albums />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
