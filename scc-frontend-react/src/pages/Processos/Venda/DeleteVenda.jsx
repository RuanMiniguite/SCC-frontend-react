import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";

import { Link, useNavigate } from 'react-router-dom';

export function DeleteVenda() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Deletar Venda" />
          </div>
        </div>
      </div>
    </div>
  );
}