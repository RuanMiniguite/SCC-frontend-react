import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";

import { Link, useNavigate } from 'react-router-dom';

const vendas = [
  {
      "codVenda": 1,
      "data": "2022-03-07",
      "valor": 16000.0,
      "pago": true,
      "desconto": 150.0,
      "cliente": {
          "codCliente": 1,
          "nome": "Ruan Miniguite",
          "cpf": "111.111.111-11",
          "email": "Ruanminiguite@gmail.com",
          "telefone": "(28)99918-9999",
          "estado": "Espirito Santo",
          "cep": "29295-000",
          "cidade": "Vargem alta",
          "bairro": "Pombal de Cima",
          "pessoa": 0
      },
      "funcionario": {
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
      "moto": {
          "codMoto": 1,
          "modelo": "Biz 110i",
          "marca": "Honda",
          "anoFabricacao": 2011,
          "anoModelo": 2011,
          "cor": "Vermelha",
          "combustivel": "Gasolina",
          "cc": 109.01,
          "chassi": "TL0001",
          "valor": 16000.0,
          "placa": "ABC1B34",
          "tipoMoto": {
              "codTipo": 1,
              "nome": "Street"
          },
          "cliente": {
              "codCliente": 1,
              "nome": "Ruan Miniguite",
              "cpf": "111.111.111-11",
              "email": "Ruanminiguite@gmail.com",
              "telefone": "(28)99918-9999",
              "estado": "Espirito Santo",
              "cep": "29295-000",
              "cidade": "Vargem alta",
              "bairro": "Pombal de Cima",
              "pessoa": 0
          }
      }
  },
  {
      "codVenda": 2,
      "data": "2022-03-13",
      "valor": 22000.0,
      "pago": false,
      "desconto": 100.0,
      "cliente": {
          "codCliente": 2,
          "nome": "Pedro Miniguite",
          "cpf": "222.222.222-22",
          "email": "Pedrominiguite@gmail.com",
          "telefone": "(28)99912-1292",
          "estado": "Espirito Santo",
          "cep": "29295-000",
          "cidade": "Vargem alta",
          "bairro": "São josé de fruteiras",
          "pessoa": 1
      },
      "funcionario": {
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
      },
      "moto": {
          "codMoto": 2,
          "modelo": "XRE 300",
          "marca": "Honda",
          "anoFabricacao": 2021,
          "anoModelo": 2021,
          "cor": "Preta",
          "combustivel": "Gasolina",
          "cc": 291.6,
          "chassi": "TL0035",
          "valor": 22000.0,
          "placa": "DGT1B34",
          "tipoMoto": {
              "codTipo": 2,
              "nome": "Adventure"
          },
          "cliente": {
              "codCliente": 2,
              "nome": "Pedro Miniguite",
              "cpf": "222.222.222-22",
              "email": "Pedrominiguite@gmail.com",
              "telefone": "(28)99912-1292",
              "estado": "Espirito Santo",
              "cep": "29295-000",
              "cidade": "Vargem alta",
              "bairro": "São josé de fruteiras",
              "pessoa": 1
          }
      }
  },
  {
      "codVenda": 3,
      "data": "2022-03-14",
      "valor": 22000.0,
      "pago": true,
      "desconto": 100.0,
      "cliente": {
          "codCliente": 1,
          "nome": "Ruan Miniguite",
          "cpf": "111.111.111-11",
          "email": "Ruanminiguite@gmail.com",
          "telefone": "(28)99918-9999",
          "estado": "Espirito Santo",
          "cep": "29295-000",
          "cidade": "Vargem alta",
          "bairro": "Pombal de Cima",
          "pessoa": 0
      },
      "funcionario": {
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
      "moto": {
          "codMoto": 4,
          "modelo": "Biz 110i",
          "marca": "Honda",
          "anoFabricacao": 2014,
          "anoModelo": 2014,
          "cor": "Vermelha",
          "combustivel": "Gasolina",
          "cc": 109.01,
          "chassi": "TL0002",
          "valor": 16000.0,
          "placa": "ABC1B34",
          "tipoMoto": {
              "codTipo": 1,
              "nome": "Street"
          },
          "cliente": {
              "codCliente": 1,
              "nome": "Ruan Miniguite",
              "cpf": "111.111.111-11",
              "email": "Ruanminiguite@gmail.com",
              "telefone": "(28)99918-9999",
              "estado": "Espirito Santo",
              "cep": "29295-000",
              "cidade": "Vargem alta",
              "bairro": "Pombal de Cima",
              "pessoa": 0
          }
      }
  },
  {
      "codVenda": 4,
      "data": "2022-03-15",
      "valor": 22000.0,
      "pago": false,
      "desconto": 100.0,
      "cliente": {
          "codCliente": 3,
          "nome": "Alberto Ricado",
          "cpf": "017.268.037-98",
          "email": "AlbertoRicado@gmail.com",
          "telefone": "(27)99865-9856",
          "estado": "Espirito Santo",
          "cep": "95689-000",
          "cidade": "Pedra Azul",
          "bairro": "Águas Vermelhas",
          "pessoa": 0
      },
      "funcionario": {
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
      },
      "moto": {
          "codMoto": 5,
          "modelo": "XRE 300",
          "marca": "Honda",
          "anoFabricacao": 2015,
          "anoModelo": 2015,
          "cor": "Preta",
          "combustivel": "Gasolina",
          "cc": 291.6,
          "chassi": "TL0004",
          "valor": 22000.0,
          "placa": "DGT1B34",
          "tipoMoto": {
              "codTipo": 2,
              "nome": "Adventure"
          },
          "cliente": {
              "codCliente": 3,
              "nome": "Alberto Ricado",
              "cpf": "017.268.037-98",
              "email": "AlbertoRicado@gmail.com",
              "telefone": "(27)99865-9856",
              "estado": "Espirito Santo",
              "cep": "95689-000",
              "cidade": "Pedra Azul",
              "bairro": "Águas Vermelhas",
              "pessoa": 0
          }
      }
  }
]

export function Venda() {
    
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