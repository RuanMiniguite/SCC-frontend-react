import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const API = 'http://localhost:8080/clientes/';
let cliente = [];

export function Cliente() {

  const [render, setRender] = useState(false);

  useEffect(() => {
    axios.get(API).then(response => {
      cliente = (response.data);
      setRender(true);
    })
  }, []);

  const navigate = useNavigate();
  const navigateToCreateCliente = () => {
    navigate('/cliente/createCliente');
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Clientes" />
            <div className="flex flex-row mt-10">
              <button className="p-1 bg-red-600 hover:bg-red-400 rounded-md text-white" onClick={navigateToCreateCliente}>Cadastrar</button>
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
                          Cód. Cliente
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
                          CPF
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Email
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
                          Pessoa
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
                      {cliente.map(cliente => (
                        <tr key={cliente.codCliente}>
                          <td className="px-3 py-4  w-[50%] whitespace-nowrap text-sm text-gray-500">
                            {cliente.codCliente}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {cliente.nome}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {cliente.cpf}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {cliente.email}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {cliente.telefone}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                            {cliente.estado}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {cliente.cep}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {cliente.cidade}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {cliente.bairro}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                            {cliente.pessoa ? 'Física' : 'Jurídica'}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link to={`/cliente/updateCliente/${cliente.codCliente}`} className="text-indigo-600 hover:text-indigo-900">
                              Editar
                            </Link>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link to={`/cliente/deleteCliente/${cliente.codCliente}`} className="text-red-600 hover:text-red-700">
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
            <h6 className="fixed right-1 bottom-1">Autor: Patrícia Regina Darós</h6>
          </div>
        </div>
      </div>
    </div>
  );
}