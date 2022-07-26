import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

const motos = [

  {
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
  {
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
  {
    "codMoto": 3,
    "modelo": "Bross 160",
    "marca": "Honda",
    "anoFabricacao": 2020,
    "anoModelo": 2021,
    "cor": "Branca",
    "combustivel": "Gasolina",
    "cc": 159.01,
    "chassi": "TL0007",
    "valor": 20000.0,
    "placa": "ABD1B33",
    "tipoMoto": {
      "codTipo": 1,
      "nome": "Street"
    },
    "cliente": null
  },
  {
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
      "telefone": "(28)99918-3529",
      "estado": "Espirito Santo",
      "cep": "29295-000",
      "cidade": "Vargem alta",
      "bairro": "Pombal de Cima",
      "pessoa": 0
    }
  },
  {
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
  },
  {
    "codMoto": 6,
    "modelo": "Bross 160",
    "marca": "Honda",
    "anoFabricacao": 2010,
    "anoModelo": 2010,
    "cor": "Branca",
    "combustivel": "Gasolina",
    "cc": 159.01,
    "chassi": "TL0005",
    "valor": 20000.0,
    "placa": "ABD1B33",
    "tipoMoto": {
      "codTipo": 1,
      "nome": "Street"
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

  // More people...
];

export function Moto() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="absolute left-[200px] p-4">
        <h1>Página de Motos</h1>

        <div className="flex flex-col mt-5">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Modelo
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Ano Fabricação
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Ano Modelo
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        CC
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Chassi
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Combustível
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Placa
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Valor
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Cor
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Marca
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Tipo Moto
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Cliente
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {motos.map(moto => (
                      <tr key={moto.codMoto}>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
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
    </>

  );
}