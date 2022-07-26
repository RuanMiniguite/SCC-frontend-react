import { BrowserRouter } from "react-router-dom"
import React from 'react';
import { Router } from "./Router"
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App