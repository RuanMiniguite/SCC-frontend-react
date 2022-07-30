import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

const API = 'http://localhost:8080/';
let funcionarios = []
let motos = []

export function CreateRecall() {

  const [nome, setNome] = useState('');
  const [dataCadastro, setDataCadastro] = useState('');
  const [dataIni, setDataIni] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [anoModelo, setAnoModelo] = useState('');
  const [chassiIni, setchassiIni] = useState('');
  const [chassiFim, setchassiFim] = useState('');
  const [codFuncionario, setCodFuncionario] = useState('');

  useEffect (() => {
    axios.get(API + 'motos/').then(response => {
      motos = (response.data);
    })

    axios.get(API + 'funcionarios/').then(response => {
      funcionarios = (response.data);
    })
  }, []);

  let handleSubmit = async (e) =>{
    e.preventDefault();

    await axios.post(API + 'recall/', {
      nome, 
      dataCadastro,
      chassiIni,
      chassiFim,
      anoModelo,
      dataIni,
      dataFim,
      funcionario: {
        codFuncionario: codFuncionario, 
      } 
    }).then(response => {
      alert('Recall: ' + nome + ' cadastrado com sucesso!');
      navigateToRecall();
    })
    .catch(error => {
      alert('Erro ao realizar cadastrado de recall! \nStatus: ' + error.response.data.status + '\n' + error.response.data.message);
    });
  }

  const navigate = useNavigate();
  const navigateToRecall = () => {
    navigate('/recall');
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Cadastro de Recall" />

            <form className="flex flex-col mt-10" onSubmit={handleSubmit} method="post">
            
              <label for="nome">Nome do Recall</label>
              <input onChange={event => setNome(event.target.value)} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="nome" id="nome" min="1900-01-01" max="2022-12-31" required /><br />

              <label for="dataCadastro">Data do Cadastro</label>
              <input onChange={event => setDataCadastro(event.target.value)} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="date" name="dataCadastro" id="dataCadastro" min="1900-01-01" max="2022-12-31" required /><br />

              <label for="dtIni">Data Inicio do Recall</label>
              <input onChange={event => setDataIni(event.target.value)} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="date" name="DataIni" id="dtIni" min="1900-01-01" max="2022-12-31" required /><br />

              <label for="dtFim">Data do Fim do Recall</label>
              <input onChange={event => setDataFim(event.target.value)} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="date" name="DataFim" id="dtFim" min="1900-01-01" max="2022-12-31" required /><br />

              <label for="ChassiIni">Chassi em que começa o recall: </label>
              <input onChange={event => setchassiIni(event.target.value)} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" id="chassiIni" name="chassiIni" placeholder="Chassi Inicial" required /><br />

              <label for="ChassiFim">Chassi em que termina o recall: </label>
              <input onChange={event => setchassiFim(event.target.value)} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" id="chassiFim" name="chassiFim" placeholder="Chassi Final" required /><br />

              <label className="text-base text-black" for="txtTipoMoto">Ano/Modelo</label>
              <select className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" onChange={event => setAnoModelo(event.target.value)} name="txtAnoModelo" id="txtAnoModelo" list="AnoModelo" placeholder="Selecione o Ano/Modelo" required>
                <option value="" selected disabled hidden>Selecione o Ano/Modelo</option>
                { motos.map((item) => {
                  return <option value={item.anoModelo}>{item.modelo}</option>
                })}
              </select><br />




              <label className="text-base text-black" for="txtTipoMoto">Funcionario</label>
              <select className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" onChange={event => setCodFuncionario(event.target.value)} name="txtFuncionarios" id="txtFuncionarios" list="Funcionarios" placeholder="Selecione o Funcionario" required>
                <option value="" selected disabled hidden>Selecione o Funcionario</option>
                { funcionarios.map((item) => {
                  return <option value={item.codFuncionario}>{item.nome}</option>
                })}
              </select><br />

              <div className="flex flex-row justify-center">
                <button className="p-1 mt-5 bg-gray-700 hover:bg-red-600 rounded-md text-white w-[100px] mb-12 mr-4" type="submit">Salvar</button>
                <button className="p-1 mt-5 border-2 border-gray-700 hover:bg-red-600 hover:border-red-600 hover:text-white rounded-md text-black w-[100px] mb-12 ml-4" type="reset" onClick={navigateToRecall}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}