import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Title } from "../../../components/Title";
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";

const API = 'http://localhost:8080/';

export function DeleteVenda() {
  
  const [venda, setVenda] = useState('');
  const navigate = useNavigate();
  const navigateToVenda = () => {
    navigate('/venda');
  };

  let params = useParams();

  useEffect (() => {
    axios.get(`${API}vendas/${params.codVenda}`)
    .then(response => {
      setVenda(response.data);
    })
    .catch(error => {
      alert(error.response.data.message);
    });
  }, []);

  function Remove(){
    axios.delete(`${API}vendas/${params.codVenda}`)
    .then(response => {
      alert('Venda: ' + venda.codVenda + ' removida com sucesso!');
      navigateToVenda();
    })
    .catch(error => {
      alert('Erro ao remover venda! \nStatus: ' + error.response.data.status + '\n' + error.response.data.message);
    });
  }

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Deletar Venda" />
            <div className="flex flex-col items-center w-full mt-8">
                <h5>Deseja deletar a venda selecionada: </h5><br />
                <h5>Codigo: {venda.codVenda}</h5> 
                <h5>Data: {venda.data}</h5>
                <h5>Pago: {venda.pago === true ? 'Pago' : 'Aguardando'}</h5>
                <h5>Valor: {venda.valor}</h5>
            </div>
            <div className="flex flex-row justify-center mt-10">
              <button className="p-1 mt-5 bg-gray-700 hover:bg-red-600 rounded-md text-white w-[100px] mb-12 mr-4"  onClick={Remove} >Deletar</button>
              <button className="p-1 mt-5 border-2 border-gray-700 hover:bg-red-600 hover:border-red-600 hover:text-white rounded-md text-black w-[100px] mb-12 ml-4" onClick={navigateToVenda}>Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}