import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";

const API = 'http://localhost:8080/clientes/';
let cliente = [];
  
export function DeleteCliente() {
  let params = useParams();
  
  useEffect (() => {
    axios.get(API + params.codCliente).then(response => {
      cliente = (response.data);
    })
  }, []);

  const Remove = () => {
    axios.delete(API + params.codCliente)
    .then(response => {
      alert('Cliente: ' + cliente.nome + ' Removido com sucesso!');
      navigate('/cliente');
    })
    .catch(error => {
      alert('Erro ao deletar o cliente! \nStatus: ' + error.response.data.status + '\n' + error.response.data.message);
    });
  }

  const navigate = useNavigate();
  const navigateToCliente = () => {
    navigate('/cliente');
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center w-screen min-w-0">
            <Title title="Deletar Cliente" />
            <div className="text-left text-2xl pt-16 w-[400px] xl:w-[600px] xl:text-3xl">
              <p className="pt-3 flex justify-between"><span className="w-[40%] text-left uppercase">Nome: </span>{cliente.nome}</p>
              <p className="pt-3 flex justify-between"><span className="w-[40%] text-left uppercase">CPF: </span>{cliente.cpf}</p>
              <p className="pt-3 flex justify-between"><span className="w-[40%] text-left uppercase">Telefone: </span>{cliente.telefone}</p>
            </div>
            <div className="flex flex-row justify-center mt-10">
              <button className="p-1 mt-5 bg-gray-700 hover:bg-red-600 rounded-md text-white w-[100px] mb-12 mr-4"  onClick={Remove} >Deletar</button>
              <button className="p-1 mt-5 border-2 border-gray-700 hover:bg-red-600 hover:border-red-600 hover:text-white rounded-md text-black w-[100px] mb-12 ml-4" onClick={navigateToCliente}>Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}