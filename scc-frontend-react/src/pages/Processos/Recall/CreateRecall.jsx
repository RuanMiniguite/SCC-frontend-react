import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

const API = 'http://localhost:8080/';
let recall = []
let motos = []

export function CreateRecall() {

  const [data, setData] = useState('');
  const [status, setstatus] = useState('');
  const [modelo, setModelo] = useState('');
  const [nomeRecall, setNomeRecall] = useState('');

  useEffect (() => {
    axios.get(API + 'motos/').then(response => {
      motos = (response.data);
    })

    axios.get(API + 'recall/').then(response => {
      recall = (response.data);
    })
  }, []);

  let handleSubmit = async (e) =>{
    e.preventDefault();

    await axios.post(API + 'realizarRecall/', {
      data, 
      status,
      moto: {
        codMoto: modelo
      },
      recall: {
        codRecall: nomeRecall
      }

    }).then(response => {
      alert('Recall da moto' + modelo + ' foi cadastrado com sucesso!');
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
            <Title title="Cadastro da Realização de Recall" />

            <form className="flex flex-col mt-10" onSubmit={handleSubmit} method="post">
            
              <label htmlfor="data">Data da Realização</label>
              <input onChange={event => setData(event.target.value)} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="date" name="data" id="data" min="1900-01-01" max="2022-12-31" required /><br />

               <label className="text-base text-black" htmlfor="txtStatus">Status</label>
              <select className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" onChange={event => setstatus(event.target.value)} name="txtStatus" id="txtStatus" list="Status" placeholder="Selecione o Status" required>
                <option value="" selected disabled hidden>Selecione o Status</option>
                <option value="0">Realizado</option>
                <option value="1">Não Realizado</option>
              </select><br /> 

              <label className="text-base text-black" for="txtTipoMoto">Moto</label>
              <select className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" onChange={event => setModelo(event.target.value)} name="txtMotos" id="txtMotos" list="motos" placeholder="Selecione a moto" required>
                <option value="" selected disabled hidden>Selecione a Moto</option>
                {motos.map((moto) => (
                    <option value={moto.codMoto}>{moto.chassi + ' - ' + moto.modelo + ' - ' + moto.anoFabricacao + '/' + moto.anoModelo}</option>
                ))}
              </select><br />
              
              <label className="text-base text-black" for="txtRecall">Recall</label>
              <select className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" onChange={event => setNomeRecall(event.target.value)} name="txtRecall" id="txtRecall" list="recall" placeholder="Selecione o Recall" required>
                <option value="" selected disabled hidden>Selecione o Recall</option>
                { recall.map((item) => {
                  {console.log(item.nome)}
                  return <option value={item.codRecall}>{item.nome}</option>
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