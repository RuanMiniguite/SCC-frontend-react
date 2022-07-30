import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Title } from "../../components/Title";


export function R_Comissao() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Relatório de Comissão" />
            <h6 className="mt-8">Listar comissão recebida por funcionário.</h6>
          </div>
        </div>
      </div>
    </div>

  );
}