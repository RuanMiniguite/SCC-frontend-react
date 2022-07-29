import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";

const API = 'http://localhost:8080/';
let venda = [];

export function DeleteVenda() {
  
  let params = useParams();

  useEffect (() => {
    axios.get(API + 'vendas/'  + params.codVenda).then(response => {
      venda = (response.data);
    })
  }, []);

  const Remove = () => {
    axios.delete(API + 'vendas/' + params.codVenda)
    .then(response => {
      alert('Venda:' + venda.codVenda + 'removida com sucesso!');
      navigateToVenda();
    })
    .catch(error => {
      alert('Erro ao remover venda! \nStatus: ' + error.response.data.status + '\n' + error.response.data.message);
    });
  }

  const navigate = useNavigate();
  const navigateToVenda = () => {
    navigate('/venda');
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center min-w-0 w-screen">
            <Title title="Deletar Venda" />
            <div className="text-left text-2xl pt-16 w-[400px] xl:w-[600px] xl:text-3xl">
              {console.log(venda)}
              <p className="pt-3 flex justify-between"><span className="w-[40%] text-left uppercase">Codigo: </span>{venda.codVenda}</p>
              <p className="pt-3 flex justify-between"><span className="w-[40%] text-left uppercase">Data: </span>{venda.data}</p>
              <p className="pt-3 flex justify-between"><span className="w-[40%] text-left uppercase">Pago: </span>{venda.pago === true ? 'Pago' : 'Aguardando'}</p>
              <p className="pt-3 flex justify-between"><span className="w-[40%] text-left uppercase">Valor: </span>{venda.valor}</p>
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