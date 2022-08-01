import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Title } from "../../components/Title";

import { useState } from "react";

import axios from "axios";

const API = 'http://localhost:8080'

let Rrevisao = [];

export function R_Revisao() {

  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');
  const [render, setRender] = useState(false);

  let handleSubmit = async (e) => {
    for (let i = Rrevisao.length; i > 0; i--) {
      Rrevisao.pop();
    }
    e.preventDefault();
    axios.get(API + '/revisoes/findByRevisaoClienteAndPeriodo/' + inicio + '/' + fim)
      .then(function (response) {
        console.log(response.data);
        Rrevisao = response.data;
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
            <Title title="Relatório de Revisão" />
            <div className="flex flex-col justify-center items-center w-screen mt-10 lg:flex-row">
              <form onSubmit={handleSubmit} method="get" className="flex flex-col justify-center items-center w-screen mt-10 lg:flex-row">
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
                          Cod revisão
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Data revisão
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Valor revisão
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Cod cliente
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Nome cliente
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Cod moto
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Placa moto
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Rrevisao.map((r) => (
                        <tr>
                          <td className="px-3 py-3 w-[50%] border-b whitespace-nowrap text-sm text-gray-500" id="0">
                            {r[0]}
                          </td>
                          <td className="px-3 py-3 border-b whitespace-nowrap text-sm text-center text-gray-500" id="1">
                            {r[1]}
                          </td>
                          <td className="px-3 border-b whitespace-nowrap text-sm text-center text-gray-500" id="2">
                            {r[2]}
                          </td>
                          <td className="px-3 border-b whitespace-nowrap text-sm text-center text-gray-500" id="3">
                            {r[3]}
                          </td>
                          <td className="px-3 border-b whitespace-nowrap text-sm text-center text-gray-500" id="4">
                            {r[4]}
                          </td>
                          <td className="px-3 border-b whitespace-nowrap text-sm text-center text-gray-500" id="5">
                            {r[5]}
                          </td>
                          <td className="px-3 border-b whitespace-nowrap text-sm text-center text-gray-500" id="6">
                            {r[6]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            <h6 className="fixed right-1 bottom-1">Autor: Luiz Henrique Cabral</h6>
          </div>
        </div>
      </div>
    </div>

  );
}