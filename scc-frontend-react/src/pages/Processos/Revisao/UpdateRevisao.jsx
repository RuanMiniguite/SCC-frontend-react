import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Title } from "../../../components/Title";

import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";

import axios from "axios";

const API = 'http://localhost:8080'


export function UpdateRevisao() {

    const [aux, setAux] = useState('')
    //Response das get routes
    const [produtos, setProdutos] = useState([])
    const [motos, setMotos] = useState([])
    const [funcionarios, setFuncionarios] = useState([])

    const [data, setData] = useState('')
    const [funcionario, setFuncionario] = useState('')
    const [moto, setMoto] = useState('')
    const [valorTotal, setValorTotal] = useState('')
    const [inputList, setinputList] = useState([{ valorUnitario: '', qtd: '', produto: { id: '', nome: '', marca: '', valor: '', } }])


    useEffect(() => {
        axios.get(`${API}/produtos`)
            .then(res => {
                setProdutos(res.data)
            })
            .catch(err => alert(err.response.data.message))

        axios.get(`${API}/motos`)
            .then(res => {
                setMotos(res.data)
            })
            .catch(err => alert(err.response.data.message))

        axios.get(`${API}/funcionarios`)
            .then(res => {
                setFuncionarios(res.data)
            })
            .catch(err => alert(err.response.data.message))
    }, []);

    //GET DADOS DA REVISAO SELECIONADA

    let params = useParams();

    useEffect(() => {
        axios.get(`${API}/revisoes/${params.codRevisao}`)
            .then(res => {
                setData(res.data.data)
                setFuncionario(res.data.funcionario.codFuncionario)
                setMoto(res.data.moto.codMoto)
                setValorTotal(res.data.valor)
                setinputList(res.data.itens)
            })
            .catch(err => alert(err.response.data.message))
    }, []);

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
        setinputList([...inputList, { id: '', valorUnitario: '', qtd: '', produto: { id: '', nome: '', marca: '', valor: '', } }]);
    }

    const navigate = useNavigate();

    let handleSubmit = async (e) => {
        e.preventDefault();

        produtos.forEach(produto => {

            for (let i = 0; i < inputList.length; i++) {
                if (produto.id == inputList[i].id) {

                    const list = [...inputList];
                    list[i]['produto']['id'] = produto.id;
                    list[i]['produto']['nome'] = produto.nome;
                    list[i]['produto']['marca'] = produto.marca;
                    list[i]['produto']['valor'] = produto.valor;
                    list[i]['valorUnitario'] = (produto.valor * inputList[i].qtd).toFixed(2);

                    setinputList(list);
                }
            }
        })

        await axios.put(`${API}/revisoes/${params.codRevisao}`, {
            codRevisao: params.codRevisao,
            data: data,
            valor: valorTotal,
            funcionario: {
                codFuncionario: funcionario
            },
            moto: {
                codMoto: moto
            },
            itens: [...inputList]

        })
            .then(res => {
                res.status === 200 ? navigate('/revisao') : alert(res.status)
            })
            .catch(err => alert(err.response.data.message))
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
                                value={data}
                                type="date"
                                name="Data"
                                id="data"
                                min="1900-01-01"
                                max="2022-12-31"
                                required
                            /><br />
                            <label className="text-base text-black" for="txtTipoMoto">Funcionário</label>
                            <select
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setFuncionario(event.target.value)}
                                value={funcionario}
                                name="Funcionario"
                                id="txtFuncionario"
                                placeholder="Selecione o Funcionário"
                                required
                            >
                                <option value="" selected disabled hidden>Selecione o Funcionario</option>

                                {funcionarios.map((funcionario) => (
                                    <option value={funcionario.codFuncionario}>{funcionario.nome}</option>
                                ))}
                            </select>

                            <label className="text-base text-black" for="txtTipoMoto">Moto</label>
                            <select
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setMoto(event.target.value)}
                                value={moto}
                                name="txtMotos"
                                id="txtMotos"
                                list="motos"
                                placeholder="Selecione a moto"
                                required
                            >
                                <option value="" selected disabled hidden>Selecione a Moto</option>
                                {motos.map((moto) => (
                                    <option value={moto.codMoto}>{moto.chassi + ' - ' + moto.modelo}</option>
                                ))}
                            </select>

                            <label className="text-base text-black">Produtos</label>
                            {
                                inputList.map((x, i) => {
                                    return (
                                        <div className="row mb-3 border border-gray-400">
                                            <div>
                                                <label className="m-1" for="id">Nome</label>

                                                <select
                                                    className="bg-transparent min-h-[30px] w-[400px] border border-gray-300 text-base px-2 m-1"
                                                    onChange={(e) => handleinputchange(e, i)}
                                                    value={inputList[i].produto.id}
                                                    name="id"
                                                    id="id"
                                                    placeholder="Selecione o Produto"
                                                    required
                                                >
                                                    <option value="" selected disabled hidden>Selecione o Produto</option>
                                                    {produtos.map((produto) => (
                                                        <option value={produto.id}>{produto.nome + ' - ' + produto.marca}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="m-1" for="qtd">Quantidade</label>
                                                <input
                                                    className="bg-transparent min-h-[30px] w-[60px] border border-gray-300 text-sm px-2 m-1"
                                                    type="number"
                                                    name="qtd"
                                                    placeholder="Qtd"
                                                    onChange={e => handleinputchange(e, i)}
                                                    value={inputList[i].qtd}
                                                />

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
                                value={valorTotal}
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