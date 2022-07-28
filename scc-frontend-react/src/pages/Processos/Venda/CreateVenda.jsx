import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from "react";

const API = 'http://localhost:8080/vendas/';
const APItest = 'https://webhook.site/b039f6e4-d703-488b-80cc-7505afbb15f6';

const cliente = [
  {
      "codCliente": 1,
      "nome": "Ruan Miniguite",
      "cpf": "111.111.111-11",
      "email": "Ruanminiguite@gmail.com",
      "telefone": "(28)99918-9999",
      "estado": "Espirito Santo",
      "cep": "29295-000",
      "cidade": "Vargem alta",
      "bairro": "Pombal de Cima",
      "pessoa": 0
  },
  {
      "codCliente": 2,
      "nome": "Pedro Miniguite",
      "cpf": "222.222.222-22",
      "email": "Pedrominiguite@gmail.com",
      "telefone": "(28)99912-1292",
      "estado": "Espirito Santo",
      "cep": "29295-000",
      "cidade": "Vargem alta",
      "bairro": "São josé de fruteiras",
      "pessoa": 1
  },
  {
      "codCliente": 3,
      "nome": "Alberto Ricado",
      "cpf": "017.268.037-98",
      "email": "AlbertoRicado@gmail.com",
      "telefone": "(27)99865-9856",
      "estado": "Espirito Santo",
      "cep": "95689-000",
      "cidade": "Pedra Azul",
      "bairro": "Águas Vermelhas",
      "pessoa": 0
  }
]
const motos = [

  {
      "codMoto": 1,
      "modelo": "Biz 110i",
      "marca": "Honda",
      "anoFabricacao": 2011,
      "anoModelo": 2011,
      "cor": "Vermelha",
      "combustivel": "Gasolina",
      "cc": 109.01,
      "chassi": "TL0001",
      "valor": 16000.0,
      "placa": "ABC1B34",
      "tipoMoto": {
          "codTipo": 1,
          "nome": "Street"
      },
      "cliente": {
          "codCliente": 1,
          "nome": "Ruan Miniguite",
          "cpf": "111.111.111-11",
          "email": "Ruanminiguite@gmail.com",
          "telefone": "(28)99918-3529",
          "estado": "Espirito Santo",
          "cep": "29295-000",
          "cidade": "Vargem alta",
          "bairro": "Pombal de Cima",
          "pessoa": 0
      }
  },
  {
      "codMoto": 2,
      "modelo": "XRE 300",
      "marca": "Honda",
      "anoFabricacao": 2021,
      "anoModelo": 2021,
      "cor": "Preta",
      "combustivel": "Gasolina",
      "cc": 291.6,
      "chassi": "TL0035",
      "valor": 22000.0,
      "placa": "DGT1B34",
      "tipoMoto": {
          "codTipo": 2,
          "nome": "Adventure"
      },
      "cliente": {
          "codCliente": 2,
          "nome": "Pedro Miniguite",
          "cpf": "222.222.222-22",
          "email": "Pedrominiguite@gmail.com",
          "telefone": "(28)99912-1292",
          "estado": "Espirito Santo",
          "cep": "29295-000",
          "cidade": "Vargem alta",
          "bairro": "São josé de fruteiras",
          "pessoa": 1
      }
  },
  {
      "codMoto": 3,
      "modelo": "Bross 160",
      "marca": "Honda",
      "anoFabricacao": 2020,
      "anoModelo": 2021,
      "cor": "Branca",
      "combustivel": "Gasolina",
      "cc": 159.01,
      "chassi": "TL0007",
      "valor": 20000.0,
      "placa": "ABD1B33",
      "tipoMoto": {
          "codTipo": 1,
          "nome": "Street"
      },
      "cliente": null
  },
  {
      "codMoto": 4,
      "modelo": "Biz 110i",
      "marca": "Honda",
      "anoFabricacao": 2014,
      "anoModelo": 2014,
      "cor": "Vermelha",
      "combustivel": "Gasolina",
      "cc": 109.01,
      "chassi": "TL0002",
      "valor": 16000.0,
      "placa": "ABC1B34",
      "tipoMoto": {
          "codTipo": 1,
          "nome": "Street"
      },
      "cliente": {
          "codCliente": 1,
          "nome": "Ruan Miniguite",
          "cpf": "111.111.111-11",
          "email": "Ruanminiguite@gmail.com",
          "telefone": "(28)99918-3529",
          "estado": "Espirito Santo",
          "cep": "29295-000",
          "cidade": "Vargem alta",
          "bairro": "Pombal de Cima",
          "pessoa": 0
      }
  },
  {
      "codMoto": 5,
      "modelo": "XRE 300",
      "marca": "Honda",
      "anoFabricacao": 2015,
      "anoModelo": 2015,
      "cor": "Preta",
      "combustivel": "Gasolina",
      "cc": 291.6,
      "chassi": "TL0004",
      "valor": 22000.0,
      "placa": "DGT1B34",
      "tipoMoto": {
          "codTipo": 2,
          "nome": "Adventure"
      },
      "cliente": {
          "codCliente": 3,
          "nome": "Alberto Ricado",
          "cpf": "017.268.037-98",
          "email": "AlbertoRicado@gmail.com",
          "telefone": "(27)99865-9856",
          "estado": "Espirito Santo",
          "cep": "95689-000",
          "cidade": "Pedra Azul",
          "bairro": "Águas Vermelhas",
          "pessoa": 0
      }
  },
  {
      "codMoto": 6,
      "modelo": "Bross 160",
      "marca": "Honda",
      "anoFabricacao": 2010,
      "anoModelo": 2010,
      "cor": "Branca",
      "combustivel": "Gasolina",
      "cc": 159.01,
      "chassi": "TL0005",
      "valor": 20000.0,
      "placa": "ABD1B33",
      "tipoMoto": {
          "codTipo": 1,
          "nome": "Street"
      },
      "cliente": {
          "codCliente": 3,
          "nome": "Alberto Ricado",
          "cpf": "017.268.037-98",
          "email": "AlbertoRicado@gmail.com",
          "telefone": "(27)99865-9856",
          "estado": "Espirito Santo",
          "cep": "95689-000",
          "cidade": "Pedra Azul",
          "bairro": "Águas Vermelhas",
          "pessoa": 0
      }
  }
]
const funcionarios = [
  {
      "codFuncionario": 1,
      "nome": "Alberto Ricado",
      "cpf": "017.268.037-98",
      "telefone": "(27)99865-9856",
      "dataNascimento": "2000-04-01",
      "estado": "Espirito Santo",
      "cep": "95689-000",
      "cidade": "Pedra Azul",
      "bairro": "Águas Vermelhas",
      "login": "AlbertoR",
      "senha": "123456",
      "cargo": "Vendedor",
      "salario": 2500.66,
      "admin": 1,
      "dataAdmissao": "2015-01-01"
  },
  {
      "codFuncionario": 2,
      "nome": "Marcos Bravim",
      "cpf": "968.569.787-45",
      "telefone": "(27)99999-9786",
      "dataNascimento": "1998-10-12",
      "estado": "Espirito Santo",
      "cep": "29500-000",
      "cidade": "Cachoeiro de Itapemirim",
      "bairro": "Agostinho Simonato",
      "login": "MarcosB",
      "senha": "789123",
      "cargo": "Vendedor",
      "salario": 1856.44,
      "admin": 0,
      "dataAdmissao": "2018-01-01"
  },
  {
      "codFuncionario": 3,
      "nome": "Mariana Ribeiro",
      "cpf": "896.146.195-78",
      "telefone": "(28)97896-9789",
      "dataNascimento": "1989-07-07",
      "estado": "Espirito Santo",
      "cep": "29300-000",
      "cidade": " Cachoeiro de Itapemirim",
      "bairro": "Santo Antonio",
      "login": "MarianaR",
      "senha": "456321",
      "cargo": "Gerente",
      "salario": 4500.5,
      "admin": 0,
      "dataAdmissao": "2020-01-01"
  }
]

export function CreateVenda() {
  
  const [dataVenda, setDataVenda] = useState('');
  const [valor, setValor] = useState('');
  const [desconto, setDesconto] = useState('');
  const [codMoto, setCodMoto] = useState('');
  const [codFuncionario, setCodFuncionario] = useState('');
  const [codCliente, setCodCliente] = useState('');
  const [valorPago, setValorPago] = useState('');

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(APItest, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          valor: valor,
          desconto: desconto,
          codMoto: codMoto,
          codFuncionario: codFuncionario,
          codCliente: codCliente,
          valorPago: valorPago,
          dataVenda: dataVenda
        }),
      });
      let data = await response.json();
      if (response.status === 200) {
        alert('Venda criada com sucesso!');
        navigate('/venda');
      }else{
        alert('Erro ao criar Venda!');
      }
    }
    catch (err) {
      console.log(err);
    }
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
              <input onChange={event => setCodMoto(event.target.value)} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="txtMotos"id="txtMotos" list="motos" placeholder="Selecione a moto" required /><br />

              <datalist id="motos">
                { motos.map((item) => {
                  return <option id={item.codMoto} value={item.chassi + ' - ' + item.modelo + ' - ' + item.cor} />;
                })}
              </datalist>
              
              <label className="text-base text-black" for="txtTipoMoto">Funcionario</label>
              <input onChange={event => setCodFuncionario(event.target.id)} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="txtFuncionario" id="txtFuncionario" list="funcionario" placeholder="Selecione o Funcionario" required /><br />

              <datalist id="funcionario">
                { funcionarios.map((item) => {
                  return <option id={item.codFuncionario} value={item.nome} />;
                })}
              </datalist>
              
              <label className="text-base text-black" for="txtTipoMoto">Cliente</label>
              <input onChange={event => setCodCliente(event.target.id)} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="txtCliente" id="txtCliente" list="cliente" placeholder="Selecione o Cliente" required /><br />

              <datalist id="cliente">
                { cliente.map((item) => {
                  return <option id={item.codCliente} value={item.nome} />;
                })}
              </datalist>

              <label className="text-base text-black" for="ChkPromos">Venda Paga</label>
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