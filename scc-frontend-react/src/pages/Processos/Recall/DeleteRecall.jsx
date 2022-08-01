import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Title } from "../../../components/Title";
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";

const API = 'http://localhost:8080/';

export function DeleteRecall() {
  
  const [recall, setRecall] = useState('');
  const navigate = useNavigate();
  const navigateToRecall = () => {
    navigate('/recall');
  };

  let params = useParams();

  useEffect (() => {
    console.log(params.codRealizarRecall)
    axios.get(`${API}realizarRecall/${params.codRealizarRecall}`)
    .then(response => {
      setRecall(response.data);
    })
    .catch(error => {
      alert(error.response.data.message);
    });
  }, []);

  function Remove() {
    axios.delete(`${API}realizarRecall/${params.codRealizarRecall}`)
    .then(response => {
      alert('Recall: ' + recall.codRealizarRecall + ' removida com sucesso!');
      navigateToRecall();
    })
    .catch(error => {
      alert('Erro ao remover recall! \nStatus: ' + error.response.data.status + '\n' + error.response.data.message);
    });
  }

  

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Deletar Recall" />
            <div className="flex flex-col items-center w-full mt-8">
                <h5>Deseja deletar o recall selecionado: {recall.codRealizarRecall}</h5>
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