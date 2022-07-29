import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Title } from "../../../components/Title";

import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import axios from "axios";

const API = 'http://localhost:8080'

let motos = []

export function Moto() {

  useEffect(() => {
    axios.get(`${API}/motos`)
      .then(res => { motos = res.data })
      .catch(err => alert(err.response.data.message))
  }, []);

  const navigate = useNavigate();

  const navigateToCreateMotos = () => {
    navigate('/moto/createMoto');
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Página de Motos" />
            <div className="flex flex-row mt-10">
              <button className="p-1 bg-red-600 hover:bg-red-400 rounded-md text-white" onClick={navigateToCreateMotos}>Cadastrar</button>
            </div>
            <div className="w-[100%] mt-7">
              <div className="shadow overflow-x-scroll border-b border-gray-200 sm:rounded-lg">
                <table className="divide-gray-200 divide-y-2 m-2 border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Modelo
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Ano Fabricação
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Ano Modelo
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        CC
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
                        Combustível
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Placa
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
                        Cor
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
                        Tipo Moto
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Cliente
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
                    {motos.map(moto => (
                      <tr key={moto.codMoto}>
                        <td className="px-3 py-4 w-[50%] whitespace-nowrap text-sm text-gray-500">
                          {moto.modelo}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {moto.anoFabricacao}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {moto.anoModelo}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {moto.cc}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {moto.chassi}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {moto.combustivel}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {moto.placa}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {moto.valor}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {moto.cor}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {moto.marca}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {moto.tipoMoto.nome}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {moto.cliente ? moto.cliente.nome : ''}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to={`/moto/updateMoto/${moto.codMoto}`} className="text-indigo-600 hover:text-indigo-900">
                            Edit
                          </Link>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to={`/moto/deleteMoto/${moto.codMoto}`} className="text-red-600 hover:text-red-900">
                            Remove
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}