import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";

const Rvenda = [
  [
      38000.0,
      2,
      "Marcos Bravim"
  ],
  [
      44000.0,
      3,
      "Mariana Ribeiro"
  ]
];


export function R_MotosVendidas() {
    return (
      <div className="w-full h-full">
        <div className="flex flex-col">
          <Header />
          <div className="flex flex-row">
            <Sidebar />
            <div className="flex flex-col items-center min-w-0 w-screen">
              <Title title="Relatorio Motos Vendidas por funcionario" />
              <div className="flex flex-col justify-center items-center w-screen mt-10 lg:flex-row">
                <div className="flex flex-col lg:mr-10">
                  <label for="dtNascimento">Data de Inicio</label>
                  <input className="bg-transparent min-h-[35px] w-[300px] border border-gray-300 text-base px-2" type="date" name="DataInicio" id="dtInicio" min="1900-01-01" max="2022-12-31" required /><br />
                </div>
                <div className="flex flex-col">
                  <label for="dtNascimento">Data de Termino</label>
                  <input className="bg-transparent min-h-[35px] w-[300px] border border-gray-300 text-base px-2" type="date" name="DataTermino" id="dtTermino" min="1900-01-01" max="2022-12-31" required /><br />
                </div>

                <button className="p-1 bg-gray-700 hover:bg-red-600 rounded-md text-white w-[100px] mb-12 lg:ml-10 mt-1 lg:mt-10" type="submit">Consultar</button>
              </div>

              <div className="w-[100%] mt-7 flex flex-row justify-center">
                <div className="shadow overflow-x-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="divide-gray-200 divide-y-2 m-2 border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Nome funcionario
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Quantidade de Moto Vendidas
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Valor total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                           {Rvenda.map((venda, index) => (
                            <tr key={index}>
                              <td className="px-3 py-3 w-[50%] border-b whitespace-nowrap text-sm text-gray-500">
                                {venda[2]}
                              </td>
                              <td className="px-3 py-3 border-b whitespace-nowrap text-sm text-center text-gray-500">
                                {venda[1]}
                              </td> 
                              <td className="px-3 border-b whitespace-nowrap text-sm text-center text-gray-500">
                                {venda[0].toFixed(2)}
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

{/* <td className="px-3 py-4  w-[50%] whitespace-nowrap text-sm text-gray-500">
{Rvenda[0][2]}
</td>
<td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-500">
{Rvenda[0][1]}
</td>
<td className="px-3 py-4 whitespace-nowrap text-sm text-center text-gray-500">
{Rvenda[0][0].toFixed(2)}
</td> */}