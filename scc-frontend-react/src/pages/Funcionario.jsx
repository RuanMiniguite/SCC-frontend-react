import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export function Funcionario() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="absolute left-[200px] p-4">
        <h1>Página Funcionario</h1>
      </div>
    </>

  );
}