import { BrowserRouter } from "react-router-dom"
import React from 'react';
import { Router } from "./Router"
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";


function App() {
/*   const [user, setUser] = React.useState(null);

  const handleLogin = () => setUser({ id: '1', name: 'robin' });
  const handleLogout = () => setUser(null); */

  const user = ''

  if (user) {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Sidebar />
          <Router user={user}/>
        </BrowserRouter>
      </>
    )
  } else {
    return (
      <Login />
    )
    
  }
}

export default App