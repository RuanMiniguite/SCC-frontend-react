import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Router />
    </BrowserRouter>
  )
}

export default App