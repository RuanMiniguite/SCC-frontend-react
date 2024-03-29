import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import axios from "axios";

import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Title } from "../../../components/Title";


const API = 'http://localhost:8080';

const Comissao = () => {

  const navigate = useNavigate();

  const [comissoes, setComissoes] = useState([]);

  useEffect(() => {
    axios.get(`${API}/taxacomissao`)
      .then(res => { setComissoes(res.data) })
      .catch(err => alert(err.response.data.message))
  }, []);

  const navigateToCreateComissao = () => {
    navigate('/comissao/createComissao');
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Comissões" />
            <div className="flex flex-row mt-10">
              <button className="p-1 bg-red-600 hover:bg-red-400 rounded-md text-white" onClick={navigateToCreateComissao}>Cadastrar</button>
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
                        Cargo
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Ano Casa
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
                        Valor Limite
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
                    {comissoes.map(comissao => (
                      <tr key={comissao.codTaxaComissao}>
                        <td className="px-3 py-4 w-[50%] whitespace-nowrap text-sm text-gray-500">
                          {comissao.cargo}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {comissao.anoCasa}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {comissao.taxa}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {comissao.valorLimite}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to={`/comissao/updateComissao/${comissao.codTaxaComissao}`} className="text-indigo-600 hover:text-indigo-900">
                            Editar
                          </Link>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to={`/comissao/deleteComissao/${comissao.codTaxaComissao}`} className="text-red-600 hover:text-red-900">
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

export default Comissao;