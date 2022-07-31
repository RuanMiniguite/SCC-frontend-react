import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const API = 'http://localhost:8080/funcionarios/';
let funcionario = [];

export function Funcionario() {

  const [render, setRender] = useState(false);

  useEffect(() => {
    axios.get(API).then(response => {
      funcionario = (response.data);
      setRender(true);
    })
  }, []);

  const navigate = useNavigate();
  const navigateToCreateFuncionario = () => {
    navigate('/funcionario/createFuncionario');
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Funcionarios" />
            <div className="flex flex-row mt-10">
              <button className="p-1 bg-red-600 hover:bg-red-400 rounded-md text-white" onClick={navigateToCreateFuncionario}>Cadastrar</button>
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
                          Nome
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Cpf
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Telefone
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Data Nascimento
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Estado
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          CEP
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Cidade
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Bairro
                        </th>
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
                          Salario
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Permição
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Data admissão
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Delete</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {funcionario.map(funcionario => (
                        <tr key={funcionario.codFuncionario}>
                          <td className="px-3 py-4  w-[50%] whitespace-nowrap text-sm text-gray-500">
                            {funcionario.nome}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {funcionario.cpf}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {funcionario.telefone}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                            {funcionario.dataNascimento}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                            {funcionario.estado}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {funcionario.cep}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {funcionario.cidade}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {funcionario.bairro}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {funcionario.cargo}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {funcionario.salario}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                            {funcionario.admin ? 'Admin' : 'Usuário'}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                            {funcionario.dataAdmissao}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link to={`/funcionario/updateFuncionario/${funcionario.codFuncionario}`} className="text-indigo-600 hover:text-indigo-900">
                              Editar
                            </Link>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link to={`/funcionario/deleteFuncionario/${funcionario.codFuncionario}`} className="text-red-600 hover:text-red-700">
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
            <h6 className="fixed right-1 bottom-1">Autor: Ruan Miniguite</h6>
          </div>
        </div>
      </div>
    </div>
  );
}