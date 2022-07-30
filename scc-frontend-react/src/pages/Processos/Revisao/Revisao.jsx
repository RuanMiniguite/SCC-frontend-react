import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";

import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import axios from "axios";

const API = 'http://localhost:8080'

let revisoes = []

export function Revisao() {

  useEffect(() => {
    axios.get(`${API}/revisoes`)
      .then(res => { revisoes = res.data })
      .catch(err => alert(err.response.data.message))
  }, []);

  const navigate = useNavigate();

  const navigateToCreateRevisao = () => {
    navigate('/revisao/createRevisao');
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Revisões" />
            <div className="flex flex-row mt-10">
              <button className="p-1 bg-red-600 hover:bg-red-400 rounded-md text-white" onClick={navigateToCreateRevisao}>Cadastrar</button>
            </div>
            <div className="w-[100%] mt-7 flex flex-row justify-center">
              <div className="shadow overflow-x-scroll border-b border-gray-200 sm:rounded-lg">
                <table className="divide-gray-200 divide-y-2 m-2 border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Cod Revisao
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Data
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Funcionario
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Chassi
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Produtos
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >Qtd
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Valor Unitário
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Valor Total
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
                    {revisoes.map(revisao => (
                      <tr key={revisao.codRevisao}>
                        <td className="px-3 py-4 w-[50%] whitespace-nowrap text-sm text-gray-500">
                          {revisao.codRevisao}
                        </td>
                        <td className="px-3 py-4 w-[50%] whitespace-nowrap text-sm text-gray-500">
                          {revisao.data}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {revisao.funcionario.nome}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {revisao.moto.chassi}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {
                            revisao.itens.map(item => (
                              item.produto.nome.concat('/ ')
                            ))
                          }
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {
                            revisao.itens.map(item => (
                              item.qtd.toString().concat('/ ')
                            ))
                          }
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {
                            revisao.itens.map(item => (
                              item.valorUnitario.toString().concat('/ ')
                            ))
                          }
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {revisao.valor}
                        </td>

                        <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to={`/revisao/updateRevisao/${revisao.codRevisao}`} className="text-indigo-600 hover:text-indigo-900">
                            Editar
                          </Link>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to={`/revisao/deleteRevisao/${revisao.codRevisao}`} className="text-red-600 hover:text-red-900">
                            Deletar
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <h6 className="fixed right-1 bottom-1">Autor: Luiz Henrique Cabral</h6>
          </div>
        </div>
      </div>
    </div>

  );
}