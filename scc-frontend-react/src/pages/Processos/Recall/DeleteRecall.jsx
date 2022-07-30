import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";

const API = 'http://localhost:8080/';
let recall = [];

export function DeleteRecall() {
  
  let params = useParams();

  useEffect (() => {
    axios.get(API + 'recall/'  + params.codRecall).then(response => {
      recall = (response.data);
    })
  }, []);

  const Remove = () => {
    axios.delete(API + 'recall/' + params.codRecall)
    .then(response => {
      alert('Recall:' + recall.codRecall + 'removida com sucesso!');
      navigateToRecall();
    })
    .catch(error => {
      alert('Erro ao remover recall! \nStatus: ' + error.response.data.status + '\n' + error.response.data.message);
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
            <Title title="Deletar Recall" />
            <div className="text-left text-2xl pt-16 w-[400px] xl:w-[600px] xl:text-3xl">
              {console.log(recall)}
              <p className="pt-3 flex justify-between"><span className="w-[40%] text-left uppercase">Codigo: </span>{recall.codRecall}</p>
              <p className="pt-3 flex justify-between"><span className="w-[40%] text-left uppercase">Nome: </span>{recall.nome}</p>
              <p className="pt-3 flex justify-between"><span className="w-[40%] text-left uppercase">Início: </span>{recall.dataIni}</p>
              <p className="pt-3 flex justify-between"><span className="w-[40%] text-left uppercase">Final: </span>{recall.dataFim}</p>
            </div>
            <div className="flex flex-row justify-center mt-10">
              <button className="p-1 mt-5 bg-gray-700 hover:bg-red-600 rounded-md text-white w-[100px] mb-12 mr-4"  onClick={Remove} >Deletar</button>
              <button className="p-1 mt-5 border-2 border-gray-700 hover:bg-red-600 hover:border-red-600 hover:text-white rounded-md text-black w-[100px] mb-12 ml-4" onClick={navigateToRecall}>Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}