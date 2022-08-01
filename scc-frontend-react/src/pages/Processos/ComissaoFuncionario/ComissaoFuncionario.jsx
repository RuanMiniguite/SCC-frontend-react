import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Title } from "../../../components/Title";


const API = 'http://localhost:8080';

const ComissaoFuncionario = () => {

  const navigate = useNavigate();

  const [comissoes, setComissoes] = useState([]);

  useEffect(() => {
    axios.get(`${API}/comissaovendas`)
      .then(res => {
        setComissoes(res.data);
      })
  }, []);

  const navigateToCreateComissaoFuncionario = () => {
    navigate('/comissaoFuncionario/createComissaoFuncionario');
  }

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Comissões dos Funcionários" />
            <div className="flex flex-row mt-10">
              <button className="p-1 bg-red-600 hover:bg-red-400 rounded-md text-white" onClick={navigateToCreateComissaoFuncionario}>Cadastrar</button>
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
                        Funcionário
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Data Início
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Data Término
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
                        Taxa
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Pagamento
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {comissoes.map(comissao => (
                      <tr key={comissao.codComissaoVenda}>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                          {comissao.venda.funcionario.nome}
                        </td>
                        <td className="px-3 py-4  w-[50%] whitespace-nowrap text-sm text-gray-500">
                          {comissao.dataIni}
                        </td>
                        <td className="px-3 py-4  w-[50%] whitespace-nowrap text-sm text-gray-500">
                          {comissao.dataFim}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                          {comissao.valorTotal.toFixed(2)}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                          {comissao.taxaComissao.taxa.toFixed(2)}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {comissao.pago ? 'Pago' : 'Aguardando pagamento'}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to={`/comissaoFuncionario/updateComissaoFuncionario/${comissao.codComissaoVenda}`} className="text-indigo-600 hover:text-indigo-900">
                            Editar
                          </Link>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to={`/comissaoFuncionario/deleteComissaoFuncionario/${comissao.codComissaoVenda}`} className="text-red-600 hover:text-red-700">
                            Deletar
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <h6 className="fixed right-1 bottom-1">Autore: Natália Pitanga Xavier</h6>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ComissaoFuncionario;