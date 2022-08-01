import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { useState } from "react";
import axios from "axios";

const API = 'http://localhost:8080/produtos/findByProdutosPorPeriodo/';
let Rprods = [];

export function R_Produtos() {

  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');
  const [render, setRender] = useState(false);

  let handleSubmit = async (e) => {
    for (let i = Rprods.length; i > 0; i--) {
      Rprods.pop();
    }
    e.preventDefault();
    axios.get(API + inicio + '/' + fim)
      .then(function (response) {
        Rprods = response.data;
        setRender(true);
      })
      .catch(function (error) {
        alert('Erro ao buscar dados');
        console.log(error);
      });
  }

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Produtos utilizados no período" />
            <div className="flex flex-col justify-center items-center w-screen mt-10 lg:flex-row">
              <form onSubmit={handleSubmit} method="get" className="flex flex-col justify-center items-center w-screen mt-10 lg:flex-row">
                <div className="flex flex-col lg:mr-10">
                  <label htmlFor="dtNascimento">Data de Inicio</label>
                  <input onChange={event => setInicio(event.target.value)} className="bg-transparent min-h-[35px] w-[300px] border border-gray-300 text-base px-2" type="date" name="DataInicio" id="dtInicio" min="1900-01-01" max="2022-12-31" required /><br />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dtNascimento">Data de Termino</label>
                  <input onChange={event => setFim(event.target.value)} className="bg-transparent min-h-[35px] w-[300px] border border-gray-300 text-base px-2" type="date" name="DataTermino" id="dtTermino" min="1900-01-01" max="2022-12-31" required /><br />
                </div>

                <button className="p-1 bg-gray-700 hover:bg-red-600 rounded-md text-white w-[100px] mb-12 lg:ml-10 mt-1 lg:mt-10" type="submit">Consultar</button>
              </form>
            </div>

            <h6 className="mt-8">Produtos utilizados em um determinado período.</h6>
            {render && (
              <div className="w-[100%] mt-3 flex flex-row justify-center">
                <div className="shadow overflow-x-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="divide-gray-200 divide-y-2 m-2 border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Produto
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Marca
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Quantidade
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Rprods.map((r) => (
                        <tr>
                          <td className="px-3 py-3 w-[50%] border-b whitespace-nowrap text-sm text-gray-500" id="2">
                            {r[2]}
                          </td>
                          <td className="px-3 py-3 border-b whitespace-nowrap text-sm text-center text-gray-500" id="1">
                            {r[1]}
                          </td>
                          <td className="px-3 border-b whitespace-nowrap text-sm text-center text-gray-500" id="0">
                            {r[0].toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            <h6 className="fixed right-1 bottom-1">Autor: Patrícia Regina Darós</h6>
          </div>
        </div>
      </div>
    </div>
  );
}