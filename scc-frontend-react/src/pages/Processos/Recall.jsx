import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export function Recall() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="absolute left-[200px] p-4">
        <h1>Página Recall</h1>
      </div>
    </>

  );
}