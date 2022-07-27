import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";

export function CreateFuncionario() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col">
            <h1>Cadastrar Funcionario</h1>
          </div>
        </div>
      </div>
    </div>
  );
}