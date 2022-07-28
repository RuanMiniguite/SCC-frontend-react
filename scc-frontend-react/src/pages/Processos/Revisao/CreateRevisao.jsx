import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Title } from "../../../components/Title";

import { useNavigate } from 'react-router-dom';
import React, { FormEvent, useState } from "react";

const produtos = [
    {
        "id": 1,
        "nome": "Bateria",
        "marca": "Moura",
        "valor": 307.02,
        "qtd": 1
    },
    {
        "id": 2,
        "nome": "Bateria",
        "marca": "Bosch",
        "valor": 149.0,
        "qtd": 4
    },
    {
        "id": 3,
        "nome": "Óleo Lubrificante",
        "marca": "Yamalube",
        "valor": 30.0,
        "qtd": 9
    },
    {
        "id": 4,
        "nome": "Amortecedor",
        "marca": "Moroe",
        "valor": 150.3,
        "qtd": 1
    },
    {
        "id": 5,
        "nome": "Amortecedor",
        "marca": "Cofap",
        "valor": 185.0,
        "qtd": 3
    },
    {
        "id": 6,
        "nome": "Pastilha de Freio",
        "marca": "Cobreq",
        "valor": 50.0,
        "qtd": 7
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


export function CreateRevisao() {

    const handleinputchange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setinputList(list);
    }

    const handleremove = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setinputList(list);
    }

    const handleaddclick = () => {
        setinputList([...inputList, { nomeProduto: '', qtdProduto: '' }]);
    }

    const navigate = useNavigate();

    const [data, setData] = useState('')
    const [funcionario, setFuncionario] = useState('')
    const [moto, setMoto] = useState('')
    const [valorTotal, setValorTotal] = useState('')
    const [inputList, setinputList] = useState([{ nomeProduto: '', qtdProduto: '' }]);


    // POST NÃO ESTÁ FUNCIONANDO
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:8080/revisoes", {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify({
                    data: data,
                    funcionario: {
                        codFuncionario: funcionario
                    },
                    moto: {
                        codMoto: moto
                    },
                    valorTotal: valorTotal,
                    itens: [
                        {
                            valorUnitario: 0,
                            qtd: 0,
                            produto: {
                                id: 3
                            }
                        }
                    ]
                }),
            });
            //let resJson = await res.json();
            if (res.status === 200) {
                //setModelo("");
                console.log("Revisão cadastrada com sucesso!")
                navigate('/revisao')
                //setMessage("User created successfully");
            } else {
                console.log("Erro ao cadastrar Revisão!")
                navigate('/revisao')
            }
        } catch (err) {
            console.log(err);
        }
    };

    const navigateToRevisoes = () => {
        navigate('/revisao');
    };

    return (
        <div className="w-full h-full">
            <div className="flex flex-col">
                <Header />
                <div className="flex flex-row">
                    <Sidebar />
                    <div className="flex flex-col items-center min-w-0 w-screen">
                        <Title title="Cadastrar Revisão" />
                        <form className="flex flex-col mt-7" onSubmit={handleSubmit} method="post">
                            <label className="text-base text-black" for="dtFabricacao">Data</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setData(event.target.value)}
                                type="date"
                                name="Data"
                                id="data"
                                min="1900-01-01"
                                max="2022-12-31"
                                required
                            /><br />
                            <label className="text-base text-black" for="txtTipoMoto">Funcionário</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setFuncionario(event.target.id)}
                                type="text"
                                name="Funcionario"
                                id="txtFuncionario"
                                list="funcionarios"
                                placeholder="Selecione o Funcionário"
                                required
                            /><br />

                            <datalist id="funcionarios">
                                {
                                    produtos.map((item) => {
                                        return <option value={item.nome} />;
                                    })
                                }
                            </datalist>
                            <label className="text-base text-black" for="txtTipoMoto">Moto</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setMoto(event.target.id)}
                                type="text"
                                name="txtMotos"
                                id="txtMotos"
                                list="motos"
                                placeholder="Selecione a moto"
                                required
                            /><br />

                            <datalist id="motos">
                                {
                                    motos.map((item) => {
                                        return <option id={item.codMoto} value={item.chassi + ' - ' + item.modelo} />;
                                    })
                                }
                            </datalist>
                            <label className="text-base text-black">Produtos</label>
                            {
                                inputList.map((x, i) => {
                                    return (
                                        <div className="row mb-3 border border-gray-400">
                                            <div>
                                                <label className="m-1" for="nomeProduto">Nome</label>
                                                <input
                                                    className="bg-transparent min-h-[30px] w-[400px] border border-gray-300 text-base px-2 m-1"
                                                    type="text"
                                                    name="nomeProduto"
                                                    list="produtos"
                                                    placeholder="Selecione o Produto"
                                                    onChange={e => handleinputchange(e, i)} />
                                                <datalist id="produtos">
                                                    {
                                                        produtos.map((item) => {
                                                            return <option value={item.nome + ' - ' + item.marca} />;
                                                        })
                                                    }
                                                </datalist>
                                            </div>
                                            <div>
                                                <label className="m-1" for="qtdProduto">Quantidade</label>
                                                <input
                                                    className="bg-transparent min-h-[30px] w-[60px] border border-gray-300 text-base px-2 m-1"
                                                    type="text"
                                                    name="qtdProduto"
                                                    placeholder="Qtd"
                                                    onChange={e => handleinputchange(e, i)} />
                                            </div>
                                            <div className="mt-4">
                                                {
                                                    inputList.length - 1 === i &&
                                                    <button className="bg-green-700 rounded-md text-white w-[70px] m-1" onClick={handleaddclick}>Add</button>
                                                }
                                                {
                                                    inputList.length !== 1 &&
                                                    <button className="bg-red-700 rounded-md text-white w-[70px] m-1" onClick={() => handleremove(i)}>Remove</button>
                                                }
                                            </div>
                                        </div>
                                    );
                                })}
                            <label className="text-base text-black" for="numValorTotal">Valor Total</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setValorTotal(event.target.value)}
                                type="number"
                                name="numValorTotal"
                                id="numValorTotal"
                                placeholder="Valor Total"
                                min={0}
                                required
                            /><br />

                            <div className="flex flex-col items-center">
                                <div className="flex flex-row">
                                    <button
                                        className="w-[100px] text-white mb-11 bg-green-700 rounded-md p-1 m-1 mt-5 hover:bg-green-600"
                                        type="submit">Salvar
                                    </button>
                                    <button
                                        className="w-[100px] text-white mb-11 bg-red-700 rounded-md p-1 m-1 mt-5 hover:bg-red-500"
                                        type="button" onClick={navigateToRevisoes}>Cancelar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}