import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";

import { Link, useNavigate } from 'react-router-dom';


const revisoes = [
  {
    "codRevisao": 1,
    "data": "2022-05-01",
    "valor": 795.25,
    "funcionario": {
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
        "telefone": "(28)99918-3529",
        "estado": "Espirito Santo",
        "cep": "29295-000",
        "cidade": "Vargem alta",
        "bairro": "Pombal de Cima",
        "pessoa": 0
      }
    },
    "itens": [
      {
        "valorUnitario": 307.02,
        "qtd": 1,
        "produto": {
          "id": 1,
          "nome": "Bateria",
          "marca": "Moura",
          "valor": 307.02,
          "qtd": 1
        }
      }
    ]
  },
  {
    "codRevisao": 2,
    "data": "2022-05-03",
    "valor": 356.0,
    "funcionario": {
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
    },
    "itens": [
      {
        "valorUnitario": 30.0,
        "qtd": 1,
        "produto": {
          "id": 3,
          "nome": "Óleo Lubrificante",
          "marca": "Yamalube",
          "valor": 30.0,
          "qtd": 9
        }
      }
    ]
  },
  {
    "codRevisao": 3,
    "data": "2022-05-01",
    "valor": 659.25,
    "funcionario": {
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
        "telefone": "(28)99918-3529",
        "estado": "Espirito Santo",
        "cep": "29295-000",
        "cidade": "Vargem alta",
        "bairro": "Pombal de Cima",
        "pessoa": 0
      }
    },
    "itens": [
      {
        "valorUnitario": 149.0,
        "qtd": 1,
        "produto": {
          "id": 2,
          "nome": "Bateria",
          "marca": "Bosch",
          "valor": 149.0,
          "qtd": 4
        }
      }
    ]
  },
  {
    "codRevisao": 4,
    "data": "2022-05-06",
    "valor": 789.0,
    "funcionario": {
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
    },
    "itens": [
      {
        "valorUnitario": 149.0,
        "qtd": 1,
        "produto": {
          "id": 2,
          "nome": "Bateria",
          "marca": "Bosch",
          "valor": 149.0,
          "qtd": 4
        }
      }
    ]
  },
  {
    "codRevisao": 5,
    "data": "2022-05-07",
    "valor": 123.25,
    "funcionario": {
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
        "telefone": "(28)99918-3529",
        "estado": "Espirito Santo",
        "cep": "29295-000",
        "cidade": "Vargem alta",
        "bairro": "Pombal de Cima",
        "pessoa": 0
      }
    },
    "itens": [
      {
        "valorUnitario": 150.3,
        "qtd": 1,
        "produto": {
          "id": 4,
          "nome": "Amortecedor",
          "marca": "Moroe",
          "valor": 150.3,
          "qtd": 1
        }
      }
    ]
  },
  {
    "codRevisao": 6,
    "data": "2022-05-09",
    "valor": 759.0,
    "funcionario": {
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
    },
    "itens": [
      {
        "valorUnitario": 150.3,
        "qtd": 1,
        "produto": {
          "id": 4,
          "nome": "Amortecedor",
          "marca": "Moroe",
          "valor": 150.3,
          "qtd": 1
        }
      }
    ]
  },
  {
    "codRevisao": 7,
    "data": "2022-05-01",
    "valor": 149.0,
    "funcionario": {
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
        "telefone": "(28)99918-3529",
        "estado": "Espirito Santo",
        "cep": "29295-000",
        "cidade": "Vargem alta",
        "bairro": "Pombal de Cima",
        "pessoa": 0
      }
    },
    "itens": [
      {
        "valorUnitario": 30.0,
        "qtd": 1,
        "produto": {
          "id": 3,
          "nome": "Óleo Lubrificante",
          "marca": "Yamalube",
          "valor": 30.0,
          "qtd": 9
        }
      },
      {
        "valorUnitario": 149.0,
        "qtd": 1,
        "produto": {
          "id": 2,
          "nome": "Bateria",
          "marca": "Bosch",
          "valor": 149.0,
          "qtd": 4
        }
      }
    ]
  }
]

export function Revisao() {
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
            <Title title="Página de Revisões" />
            <div className="flex flex-row mt-10">
              <button className="p-1 bg-red-600 hover:bg-red-400 rounded-md text-white" onClick={navigateToCreateRevisao}>Cadastrar</button>
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
                        <span className="sr-only">Edit</span>
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Delete</span>
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
                          <Link to={`/moto/updateMoto/${revisao.codRevisao}`} className="text-indigo-600 hover:text-indigo-900">
                            Edit
                          </Link>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to={`/moto/deleteMoto/${revisao.codRevisao}`} className="text-red-600 hover:text-red-900">
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