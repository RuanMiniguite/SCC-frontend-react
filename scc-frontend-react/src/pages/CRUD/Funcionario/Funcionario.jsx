import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";

import { useNavigate } from 'react-router-dom';

const funcionario = [
  {
      "codFuncionario": 1,
      "nome": "Alberto Ricado",
      "cpf": "017.268.037-98",
      "telefone": "(27)99865-9856",
      "dataNascimento": "2000-04-01",
      "estado": "Espirito Santo",
      "cep": "95689-000",
      "cidade": "Pedra Azul",
      "bairro": "Águas Vermelhas",
      "login": "AlbertoR",
      "senha": "123456",
      "cargo": "Vendedor",
      "salario": 2500.66,
      "admin": 1,
      "dataAdmissao": "2015-01-01"
  },
  {
      "codFuncionario": 2,
      "nome": "Marcos Bravim",
      "cpf": "968.569.787-45",
      "telefone": "(27)99999-9786",
      "dataNascimento": "1998-10-12",
      "estado": "Espirito Santo",
      "cep": "29500-000",
      "cidade": "Cachoeiro de Itapemirim",
      "bairro": "Agostinho Simonato",
      "login": "MarcosB",
      "senha": "789123",
      "cargo": "Vendedor",
      "salario": 1856.44,
      "admin": 0,
      "dataAdmissao": "2018-01-01"
  },
  {
      "codFuncionario": 3,
      "nome": "Mariana Ribeiro",
      "cpf": "896.146.195-78",
      "telefone": "(28)97896-9789",
      "dataNascimento": "1989-07-07",
      "estado": "Espirito Santo",
      "cep": "29300-000",
      "cidade": " Cachoeiro de Itapemirim",
      "bairro": "Santo Antonio",
      "login": "MarianaR",
      "senha": "456321",
      "cargo": "Gerente",
      "salario": 4500.5,
      "admin": 0,
      "dataAdmissao": "2020-01-01"
  }
]


export function Funcionario() {
  
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
          <div className="flex flex-col items-center min-w-0 pt-5 w-screen">
            <h1 className="uppercase scale-125">Funcionarios</h1>
            <div className="flex flex-row mt-5">
              <button className="p-1 bg-red-600 hover:bg-red-400 rounded-md text-white" onClick={navigateToCreateFuncionario}>Cadastrar</button>
            </div>
            <div className="w-[100%] mt-7">
              <div className="shadow overflow-x-scroll border-b border-gray-200 sm:rounded-lg">
                <table className="divide-gray-200 divide-y-2">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3 w-72 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
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
                        Admin
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
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {funcionario.map(funcionario => (
                      <tr key={funcionario.codFuncionario}>
                        <td className="px-3 py-4 w-72 whitespace-nowrap text-sm text-gray-500">
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
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
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
                          {funcionario.admin}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                          {funcionario.dataAdmissao}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                            Edit
                          </a>
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