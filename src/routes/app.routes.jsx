import { Routes, Route } from "react-router-dom";

import { New } from "../pages/New";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Profil } from "../pages/Profil";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profil />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
