import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Title } from "../../../components/Title";

import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from "react";
import React from "react";

import axios from "axios";

const API = 'http://localhost:8080'


export function CreateMoto() {

    const navigate = useNavigate();

    const [modelo, setModelo] = useState('')
    const [marca, setMarca] = useState('')
    const [idTipoMoto, setIdTipoMoto] = useState('')
    const [anoFab, setAnoFab] = useState('')
    const [anoModelo, setAnoModelo] = useState('')
    const [cor, setCor] = useState('')
    const [combustivel, setCombustivel] = useState('')
    const [cilindrada, setCilindrada] = useState('')
    const [chassi, setChassi] = useState('')
    const [placa, setPlaca] = useState('')
    const [valor, setValor] = useState('')

    let handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post(`${API}/motos`, {
            modelo, marca, tipoMoto: { codTipo: idTipoMoto, }, anoFabricacao: anoFab, anoModelo, cor, combustivel, cc: cilindrada, chassi, placa, valor,
        })
            .then(res => {
                res.status === 200 ? navigate('/moto') : alert(res.status)
            })
            .catch(err => alert(err.response.data.message))
    };

    const navigateToMotos = () => {
        navigate('/moto');
    };

    return (
        <div className="w-full h-full">
            <div className="flex flex-col">
                <Header />
                <div className="flex flex-row">
                    <Sidebar />
                    <div className=" flex flex-col items-center min-w-0 pt-5 w-screen">
                        <Title title="Cadastrar Motos" />
                        <form className="flex flex-col mt-7" onSubmit={handleSubmit} method="post">
                            <label className="text-base text-black" for="txtModelo">Modelo</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setModelo(event.target.value)}
                                type="text"
                                name="modelo"
                                id="txtModelo"
                                placeholder="Digite aqui o modelo"
                                size="20"
                                maxlength="20"
                                required
                            /><br />
                            <label className="text-base text-black" for="txtMarca">Marca</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setMarca(event.target.value)}
                                type="text"
                                name="txtMarca"
                                id="txtMarca"
                                placeholder="Digite aqui a marca"
                                size="20"
                                maxlength="20"
                                required
                            /><br />

                            <label className="text-base text-black" for="txtTipoMoto">Tipo da Moto</label>
                            <select
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setIdTipoMoto(event.target.value)}
                                name="Moto"
                                id="txtTipoMoto"
                                list="tipoMoto"
                                placeholder="Informe o tipo da moto"
                                required
                            >
                                <option value="" selected disabled hidden>Selecione o Tipo da Moto</option>
                                <option value="1">Street</option>
                                <option value="2">Adventure</option>
                                <option value="3">Off Road</option>
                                <option value="4">Sport</option>
                                <option value="5">Touring</option>
                            </select><br />

                            <label className="text-base text-black" for="anoFabricacao">Ano Fabricação</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setAnoFab(event.target.value)}
                                type="number"
                                name="anoFabricacao"
                                id="anoFabricacao"
                                min={1900}
                                placeholder="aaaa"
                                required
                            /><br />

                            <label className="text-base text-black" for="anoModelo">Ano Modelo</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setAnoModelo(event.target.value)}
                                type="number"
                                name="anoModelo"
                                id="anoModelo"
                                min={1900}
                                placeholder="aaaa"
                                required
                            /><br />

                            <label className="text-base text-black" for="txtCor">Cor</label>
                            <select
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setCor(event.target.value)}
                                name="Cor"
                                id="txtCor"
                                placeholder="Informe a cor da moto"
                                required
                            >
                                <option value="" selected disabled hidden>Selecione a cor</option>
                                <option value="Branco">Branco</option>
                                <option value="Vermelha">Vermelha</option>
                                <option value="Preto">Preto</option>
                                <option value="Cinza">Cinza</option>
                                <option value="Azul">Azul</option>
                                <option value="Vender">Vender</option>
                                <option value="Amarela">Amarela</option>
                            </select><br />

                            <label className="text-base text-black" for="txtCombustivel">Combustivel</label>
                            <select
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setCombustivel(event.target.value)}
                                name="Combustivel"
                                id="txtCombustivel"
                                placeholder="Informe o combustivel da moto"
                                required
                            >
                                <option value="" selected disabled hidden>Selecione a cor</option>
                                <option value="Gasolina">Gasolina</option>
                                <option value="Flex">Flex</option>
                            </select><br />

                            <label className="text-base text-black" for="numCC">Cilindrada</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setCilindrada(event.target.value)}
                                type="number"
                                name="numCC"
                                id="numCC"
                                min="0"
                                placeholder="Digite aqui a cilindrada da moto"
                                required
                            /><br />

                            <label className="text-base text-black" for="txtChassi">Chassi</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setChassi(event.target.value)}
                                type="text"
                                name="Chassi"
                                id="txtChassi"
                                placeholder="Digite aqui o chassi"
                                size="20"
                                maxlength="20"
                                required
                            /><br />

                            <label className="text-base text-black" for="txtPlaca">Placa</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setPlaca(event.target.value)}
                                type="text"
                                name="Placa"
                                id="txtPlaca"
                                placeholder="Digite no formato XXX-0000"
                                pattern="[A-Z]{3}-[0-9]{4}"
                            /><br />

                            <label className="text-base text-black" for="numValor">Valor</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setValor(event.target.value)}
                                type="number"
                                id="numValor"
                                name="numValor"
                                placeholder="Digite aqui o valor"
                                required
                            /><br />

                            <div className="flex flex-col items-center">
                                <div className="flex flex-row">
                                    <button
                                        className="p-1 mt-5 bg-gray-700 hover:bg-red-600 rounded-md text-white w-[100px] mb-12 mr-4"
                                        type="submit">Salvar
                                    </button>
                                    <button
                                        className="p-1 mt-5 border-2 border-gray-700 hover:bg-red-600 hover:border-red-600 hover:text-white rounded-md text-black w-[100px] mb-12 ml-4"
                                        type="button" onClick={navigateToMotos}>Cancelar
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