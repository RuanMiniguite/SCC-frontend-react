import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="absolute left-[200px] p-4">

        <h1>Página Home</h1>
      </div>
    </>
  );
}