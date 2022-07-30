import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

const API = 'http://localhost:8080/';
let cliente = []
let motos = []
let funcionarios = []

export function CreateVenda() {
  
  const [dataVenda, setDataVenda] = useState('');
  const [valor, setValor] = useState('');
  const [desconto, setDesconto] = useState('');
  const [codMoto, setCodMoto] = useState('');
  const [codFuncionario, setCodFuncionario] = useState('');
  const [codCliente, setCodCliente] = useState('');
  const [valorPago, setValorPago] = useState('');

  useEffect (() => {
    axios.get(API + 'clientes/').then(response => {
      cliente = (response.data);
    })

    axios.get(API + 'motos/').then(response => {
      motos = (response.data);
    })

    axios.get(API + 'funcionarios/').then(response => {
      funcionarios = (response.data);
    })
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
  
    let pago = false;
    if(valorPago == 'on'){
      pago = true;
    }

    let codTipoMoto;
    for (let key of motos) {
      if(key.codMoto == codMoto){
        codTipoMoto = key.tipoMoto.codTipo;
        break
      }
    }

    await axios.post(API + 'vendas/', {
      data: dataVenda, 
      valor: valor, 
      pago,
      desconto: desconto, 
      cliente: {
        codCliente: codCliente, 
      }, 
      funcionario: {
        codFuncionario: codFuncionario, 
      }, 
      moto: {
        codMoto: codMoto, 
        tipoMoto: {
          codTipo: codTipoMoto, 
        }, 
        cliente: {
          codCliente: codCliente, 
        }, }
    }).then(response => {
      alert('Venda da Moto: ' + codMoto + ' realizada com sucesso!');
      navigateToVenda();
    })
    .catch(error => {
      alert('Erro ao realizar venda! \nStatus: ' + error.response.data.status + '\n' + error.response.data.message);
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
            <Title title="Cadastro de Venda" />

            <form className="flex flex-col mt-10" onSubmit={handleSubmit} method="post">
            
              <label for="dtData">Data</label>
              <input onChange={event => setDataVenda(event.target.value)} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="date" name="Data" id="dtData" min="1900-01-01" max="2022-12-31" required /><br />

              <label for="Valor">Valor</label>
              <input onChange={event => setValor(event.target.value)} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" id="txtValor" name="Valor" placeholder="Digite aqui o Valor" required /><br />

              <label for="Desconto">Desconto</label>
              <input onChange={event => setDesconto(event.target.value)} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" id="txtDesconto" name="Desconto" placeholder="Digite aqui o Desconto" required /><br />
              
              <label className="text-base text-black" for="txtTipoMoto">Moto</label>
              <select className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" onChange={event => setCodMoto(event.target.value)} name="txtMotos" id="txtMotos" list="motos" placeholder="Selecione a moto" required>
                  <option value="" selected disabled hidden>Selecione a Moto</option>
                  {motos.map((moto) => (
                      <option value={moto.codMoto}>{moto.chassi + ' - ' + moto.modelo + ' - ' + moto.anoFabricacao + '/' + moto.anoModelo}</option>
                  ))}
              </select><br />

              <label className="text-base text-black" for="txtTipoMoto">Funcionario</label>
              <select className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" onChange={event => setCodFuncionario(event.target.value)} name="txtFuncionarios" id="txtFuncionarios" list="Funcionarios" placeholder="Selecione o Funcionario" required>
                <option value="" selected disabled hidden>Selecione o Funcionario</option>
                { funcionarios.map((item) => {
                  return <option value={item.codFuncionario}>{item.nome}</option>
                })}
              </select><br />

              <label className="text-base text-black" for="txtTipoMoto">Cliente</label>
              <select className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" onChange={event => setCodCliente(event.target.value)} name="txtClientes" id="txtClientes" list="Clientes" placeholder="Selecione o Cliente" required>
                <option value="" selected disabled hidden>Selecione o Cliente</option>
                { cliente.map((item) => {
                  return <option value={item.codCliente}>{item.nome}</option>
                })}
              </select><br />

              <label className="text-base text-black" for="ChkPromos">Moto Paga</label>
              <input onChange={event => setValorPago(event.target.value)} className="bg-transparent min-h-[20px] w-[90px] border border-gray-300 text-base px-2" type="checkbox" name="Promos" id="ChkPago" />

              <div className="flex flex-row justify-center">
                <button className="p-1 mt-5 bg-gray-700 hover:bg-red-600 rounded-md text-white w-[100px] mb-12 mr-4" type="submit">Salvar</button>
                <button className="p-1 mt-5 border-2 border-gray-700 hover:bg-red-600 hover:border-red-600 hover:text-white rounded-md text-black w-[100px] mb-12 ml-4" type="reset" onClick={navigateToVenda}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}