import { useState, useEffect } from "react";

import axios from 'axios';

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Title } from "../../components/Title";

const API = 'http://localhost:8080';

export function R_Comissao() {

  const [funcionarios, setFuncionarios] = useState([]);
  const [comissaoFuncionarios, setComissaoFuncionarios] = useState([]);
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState('')

  useEffect(() => {
    axios.get(`${API}/funcionarios`)
      .then(response => {
        setFuncionarios(response.data);
      })
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.get(`${API}/comissaovendas/findByFuncionarioAndPeriodo/${funcionarioSelecionado}/${inicio}/${fim}`)
      .then(function (response) {
        console.log(response.data)
        setComissaoFuncionarios(response.data);
      })
      .catch(function (error) {
        alert('Erro ao buscar dados');
        console.log(error);
      });
  }

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Relatório de Comissão" />
            <div className="flex flex-col justify-center items-center w-screen mt-10 lg:flex-row">
              <form onSubmit={handleSubmit} method="post" className="flex flex-col justify-center items-center w-screen mt-10 lg:flex-row">
                <div className="flex flex-col lg:mr-10">
                  <label htmlFor="funcionario">Funcionário</label>
                  <select className="bg-transparent min-h-[35px] w-[300px] border border-gray-300 text-base px-2" onChange={e => setFuncionarioSelecionado(e.target.value)} name="funcionario" id="funcionario" list="funcionario" placeholder="Selecione o funcionário" required>
                    <option value="" selected disabled hidden>Selecione o Funcionário</option>
                    {funcionarios.map((funcionario, index) => (
                      <option key={index} value={funcionario.codFuncionario}>{funcionario.nome}</option>
                    ))}
                  </select><br />
                </div>
                <div className="flex flex-col lg:mr-10">
                  <label htmlFor="dtNascimento">Data de Inicio</label>
                  <input onChange={event => setInicio(event.target.value)} className="bg-transparent min-h-[35px] w-[300px] border border-gray-300 text-base px-2" type="date" name="DataInicio" id="dtInicio" required /><br />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dtNascimento">Data de Termino</label>
                  <input onChange={event => setFim(event.target.value)} className="bg-transparent min-h-[35px] w-[300px] border border-gray-300 text-base px-2" type="date" name="DataTermino" id="dtTermino" required /><br />
                </div>


                <button className="p-1 bg-gray-700 hover:bg-red-600 rounded-md text-white w-[100px] mb-12 lg:ml-10 mt-1 lg:mt-10" type="submit">Consultar</button>
              </form>
            </div>

            <div className="w-[100%] mt-3 flex flex-row justify-center">
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
                        Valor total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comissaoFuncionarios.map((cf) => (
                      <tr>
                        <td className="px-3 py-3 w-[50%] border-b whitespace-nowrap text-sm text-gray-500" id="2">
                          {cf.venda.funcionario.nome}
                        </td>
                        <td className="px-3 py-3 border-b whitespace-nowrap text-sm text-center text-gray-500" id="1">
                          {cf.valorTotal}
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