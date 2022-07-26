import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export function R_Comissao() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="absolute left-[200px] p-4">
        <h1>Listar comissão recebida por funcionário.</h1>
      </div>
    </>

  );
}