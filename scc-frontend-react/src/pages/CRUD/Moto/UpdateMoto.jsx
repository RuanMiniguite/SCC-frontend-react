import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";

export function UpdateMoto() {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col">
                <Header />
                <div className="flex flex-row">
                    <Sidebar />
                    <div className=" flex flex-col items-center min-w-0 pt-5 w-screen">
                        <h1 className="uppercase scale-125">Editar Moto</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}