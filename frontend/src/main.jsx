import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckAuth from "./components/check-auth.jsx";
import Tickets from "./pages/tickets.jsx";
import TicketDetailsPage from "./pages/ticket.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import Admin from "./pages/admin.jsx";
import Navbar from "./components/navbar.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={
          <CheckAuth isProtected={true}>
            <Tickets />
          </CheckAuth>
        }
      />
      <Route
        path="/tickets/:id"
        element={
          <CheckAuth isProtected={true}>
            <TicketDetailsPage />
          </CheckAuth>
        }
      />
      <Route
        path="/login"
        element={
          <CheckAuth isProtected={false}>
            <Login />
          </CheckAuth>
        }
      />
      <Route
        path="/signup"
        element={
          <CheckAuth isProtected={false}>
            <Signup />
          </CheckAuth>
        }
      />
      <Route
        path="/admin"
        element={
          <CheckAuth isProtected={true}>
            <Admin />
          </CheckAuth>
        }
      />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
