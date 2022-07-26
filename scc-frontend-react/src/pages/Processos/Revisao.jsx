import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export function Revisao() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="absolute left-[200px] p-4">
        <h1>Página Revisao</h1>
      </div>
    </>

  );
}