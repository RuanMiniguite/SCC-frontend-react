import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Title } from "../../components/Title";


export function R_Produtos() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Relatório de Produto" />
            <h6 className="mt-8">Produtos utilizados em um determinado período.</h6>
          </div>
        </div>
      </div>
    </div>

  );
}