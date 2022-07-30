import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";

const API = 'http://localhost:8080/';
let vendas = [];

export function Venda() {
  
  useEffect (() => {
    axios.get(API + 'vendas/').then(response => {
      vendas = (response.data);
    })
  }, []);

  const navigate = useNavigate();
  const navigateToCreateVenda = () => {
    navigate('/venda/createVenda');
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Vendas" />
            <div className="flex flex-row mt-10">
              <button className="p-1 bg-red-600 hover:bg-red-400 rounded-md text-white" onClick={navigateToCreateVenda}>Cadastrar</button>
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
                        Data
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Valor
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Desconto
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Pagamento
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Cliente
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        telefone
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
                        Moto
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {vendas.map(vendas => (
                      <tr key={vendas.codVenda}>
                        <td className="px-3 py-4  w-[50%] whitespace-nowrap text-sm text-gray-500">
                          {vendas.data}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                          {vendas.valor.toFixed(2)}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                          {vendas.desconto.toFixed(2)}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {vendas.pago? 'Pago': 'Aguardando pagamento'}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                          {vendas.cliente.nome}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {vendas.cliente.telefone}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {vendas.funcionario.nome}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {vendas.moto.modelo}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to={`/venda/updateVenda/${vendas.codVenda}`} className="text-indigo-600 hover:text-indigo-900">
                            Editar
                          </Link>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to={`/venda/deleteVenda/${vendas.codVenda}`} className="text-red-600 hover:text-red-700">
                            Deletar
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <h6 className="fixed right-1 bottom-1">Autor: Ruan Miniguite</h6>
          </div>
        </div>
      </div>
    </div>
  );
}