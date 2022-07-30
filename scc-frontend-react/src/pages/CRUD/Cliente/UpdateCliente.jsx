import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Title } from "../../../components/Title";
import React from "react";
import axios from 'axios';

const API = 'http://localhost:8080/clientes/';

export function UpdateCliente() {
  
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [email, setEmail] = useState('');
  const [pessoa, setPessoa] = useState('');
  
  let params = useParams();
  const navigate = useNavigate();
  const navigateToCliente = () => {
    navigate('/cliente');
  };

  useEffect(() => {
    axios.get(API + params.codCliente).then(response => {
      setNome(response.data.nome);
      setCpf(response.data.cpf);
      setEmail(response.data.email);
      setTelefone(response.data.telefone);
      setEstado(response.data.estado);
      setCep(response.data.cep);
      setCidade(response.data.cidade);
      setBairro(response.data.bairro);
      setAdmin(response.data.pessoa);
    })
    .catch(error => {
      alert('Erro ao buscar cliente! \nStatus: ' + error.response.data.status + '\n' + error.response.data.message);
    });
  }, []);


  let handleSubmit = async (e) => {
    e.preventDefault();

      axios.put(API + params.codCliente, {
        codCliente: params.codCliente, nome, cpf, email, telefone, estado, cep, cidade, bairro, pessoa
      }).then(response => {
        alert('Cliente: ' + response.data.nome + ' atualizado com sucesso!');
        navigateToCliente();
      })
      .catch(error => {
        alert('Erro ao atualizar cliente! \nStatus: ' + error.response.data.status + '\n' + error.response.data.message);
      });
  }

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center w-screen min-w-0">
            <Title title="Editar Cadastro de Cliente" />
            <form className="flex flex-col mt-10" onSubmit={handleSubmit} method="post">

              <label className="text-base text-black" for="txtNomeCompleto">Nome Completo</label>
              <input onChange={event => setNome(event.target.value)} value={nome} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="NomeCompleto" id="txtNomeCompleto" placeholder="Digite aqui o nome" size="20" maxlength="20" autocomplete="off" required /><br />

              <label for="txtCpf">CPF</label>
              <input onChange={event => setCpf(event.target.value)} value={cpf} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="cpf" id="txtCpf" placeholder="Digite aqui o cpf somente numeros" autocomplete="off" required /><br />

              <label for="txtEmail">E-mail</label>
              <input onChange={event => setEmail(event.target.value)} value={email} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="email" name="Email" id="txtEmail" placeholder="Digite aqui o E-mail" required /><br />
              
              <label for="txtTelefone">Telefone</label>
              <input onChange={event => setTelefone(event.target.value)} value={telefone}  className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="telefone" id="txtTelefone" placeholder="Digite no formato (xx)xxxxx-xxxx" pattern="\(\[0-9]{2}\)\ [0-9]{4,6}-[0-9]{3,4}$" required /><br />

              <label for="txtEstado">Estado</label>
              <select onChange={event => setEstado(event.target.value)} value={estado} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="Estado" id="txtEstado" list="estado" placeholder="Informe Estado" required>
                <option value="" selected disabled hidden>Selecione o Estado</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select><br />

              <label for="txtCep">Cep</label>
              <input onChange={event => setCep(event.target.value)} value={cep} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="cep" id="txtCep" placeholder="Digite no formato xxxxx-xxx" Pattern="[0-9]{5[0-9]{3}" required /><br />

              <label for="txtCidade">Cidade</label>
              <input onChange={event => setCidade(event.target.value)} value={cidade} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="Cidade" id="txtCidade" placeholder="Digite aqui a cidade" title="Digite aqui a cidade!" required /><br />

              <label for="txtBairro">Bairro</label>
              <input onChange={event => setBairro(event.target.value)} value={bairro} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="Bairro" id="txtBairro" placeholder="Digite aqui o bairro" title="Digite aqui o bairro!" required /><br />
              
              <div className="flex flex-row justify-center">
                <button className="p-1 mt-5 bg-gray-700 hover:bg-red-600 rounded-md text-white w-[100px] mb-12 mr-4" type="submit">Editar</button>
                <button className="p-1 mt-5 border-2 border-gray-700 hover:bg-red-600 hover:border-red-600 hover:text-white rounded-md text-black w-[100px] mb-12 ml-4" onClick={navigateToCliente} type="reset">Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}