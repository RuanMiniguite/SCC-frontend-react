import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export function ComissaoFuncionario() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="absolute left-[200px] p-4">
        <h1>Página Comissao Funcionario</h1>
      </div>
    </>

  );
}