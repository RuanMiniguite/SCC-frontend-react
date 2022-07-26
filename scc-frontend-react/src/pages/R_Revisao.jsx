import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export function R_Revisao() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="absolute left-[200px] p-4">
        <h1>Revisão de moto por clientes em um determinado período.</h1>
      </div>
    </>

  );
}