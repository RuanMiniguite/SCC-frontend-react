import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Title } from "../../components/Title";


export function R_Revisao() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Relatório de Revisão" />
            <div className="flex flex-col justify-center items-center w-screen mt-10 lg:flex-row">
              <form onSubmit={''} method="get" className="flex flex-col justify-center items-center w-screen mt-10 lg:flex-row">
                <div className="flex flex-col lg:mr-10">
                  <label htmlFor="DataInicio">Data de Inicio</label>
                  <input onChange={event => setInicio(event.target.value)} className="bg-transparent min-h-[35px] w-[300px] border border-gray-300 text-base px-2" type="date" name="DataInicio" id="dtInicio" min="1900-01-01" max="2022-12-31" required /><br />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="DataTermino">Data de Termino</label>
                  <input onChange={event => setFim(event.target.value)} className="bg-transparent min-h-[35px] w-[300px] border border-gray-300 text-base px-2" type="date" name="DataTermino" id="dtTermino" min="1900-01-01" max="2022-12-31" required /><br />
                </div>

                <button className="p-1 bg-gray-700 hover:bg-red-600 rounded-md text-white w-[100px] mb-12 lg:ml-10 mt-1 lg:mt-10" type="submit">Consultar</button>
              </form>

            </div>
            <h6 className="mt-8">Revisão de moto por clientes em um determinado período.</h6>
            <div className="w-[100%] mt-3 flex flex-row justify-center">
            </div>
            <h6 className="fixed right-1 bottom-1">Autor: Luiz Henrique Cabral</h6>
          </div>
        </div>
      </div>
    </div>

  );
}