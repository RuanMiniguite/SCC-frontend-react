import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const API = 'http://localhost:8080/';
let recalls = [];

export function Recall() {

  const [render, setRender] = useState(false);

  useEffect(() => {
    axios.get(API + 'recall/').then(response => {
      recalls = (response.data);
      setRender(true);
    })
  }, []);

  const navigate = useNavigate();
  const navigateToCreateRecall = () => {
    navigate('/recall/createRecall');
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Recall" />
            <div className="flex flex-row mt-10">
              <button className="p-1 bg-red-600 hover:bg-red-400 rounded-md text-white" onClick={navigateToCreateRecall}>Cadastrar</button>
            </div>

            {render && (
              <div className="w-[100%] mt-7 flex flex-row justify-center">
                <div className="shadow overflow-x-scroll border-b border-gray-200 sm:rounded-lg">
                  <table className="divide-gray-200 divide-y-2 m-2 border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Código
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Nome
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Dt. Ini.
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Dt. Fim
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Chassi Ini.
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Chassi Fim
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Funcionário
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Editar</span>
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Deletar</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recalls.map(recalls => (
                        <tr key={recalls.codRecall}>
                          <td className="px-3 py-4  w-[50%] whitespace-nowrap text-sm text-gray-500">
                            {recalls.codRecall}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                            {recalls.nome}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {recalls.dataIni}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                            {recalls.dataFim}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {recalls.chassiIni}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                            {recalls.chassiFim}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {recalls.funcionario.nome}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link to={`/recall/updateRecall/${recalls.codRecall}`} className="text-indigo-600 hover:text-indigo-900">
                              Editar
                            </Link>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link to={`/recall/deleteRecall/${recalls.codRecall}`} className="text-red-600 hover:text-red-700">
                              Deletar
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            <h6 className="fixed right-1 bottom-1">Autor: Patrícia Regina Daros</h6>
          </div>
        </div>
      </div>
    </div>
  );
}