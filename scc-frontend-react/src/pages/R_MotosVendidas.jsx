import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export function R_MotosVendidas() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="absolute left-[200px] p-4">
        <h1>Listar as motos vendidas por um funcionário por tipo em um determinado período.</h1>
      </div>
    </>

  );
}