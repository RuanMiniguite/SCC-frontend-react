import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Title } from "../../../components/Title";

import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";

import axios from "axios";

const API = 'http://localhost:8080'


export function UpdateMoto() {
    const navigate = useNavigate();

    const [cliente, setCliente] = useState({ cliente: { codCliente: '' } })
    const [modelo, setModelo] = useState('')
    const [marca, setMarca] = useState('')
    const [idTipoMoto, setIdTipoMoto] = useState('')
    const [tipoMotoNome, settipoMotoNome] = useState('')

    const [anoFab, setAnoFab] = useState('')
    const [anoModelo, setAnoModelo] = useState('')
    const [cor, setCor] = useState('')
    const [combustivel, setCombustivel] = useState('')
    const [cilindrada, setCilindrada] = useState('')
    const [chassi, setChassi] = useState('')
    const [placa, setPlaca] = useState('')
    const [valor, setValor] = useState('')

    let params = useParams();

    useEffect(() => {
        axios.get(`${API}/motos/${params.codMoto}`)
            .then(res => {
                setModelo(res.data.modelo)
                setMarca(res.data.marca)
                setIdTipoMoto(res.data.tipoMoto.codTipo)
                settipoMotoNome(res.data.tipoMoto.nome)
                setAnoFab(res.data.anoFabricacao)
                setAnoModelo(res.data.anoModelo)
                setCor(res.data.cor)
                setCombustivel(res.data.combustivel)
                setCilindrada(res.data.cc)
                setChassi(res.data.chassi)
                setPlaca(res.data.placa)
                setValor(res.data.valor)
                setCliente(res.data.cliente)
                console.log(cliente)
            })
            .catch(err => alert(err.response.data.message))
    }, []);

    let handleSubmit = async (e) => {
        e.preventDefault();

        await axios.put(`${API}/motos/${params.codMoto}`, {
            cliente, codMoto: params.codMoto, modelo, marca, tipoMoto: { codTipo: idTipoMoto, nome: tipoMotoNome }, anoFabricacao: anoFab, anoModelo, cor, combustivel, cc: cilindrada, chassi, placa, valor,
        })
            .then(res => {
                if (res.status === 200) {
                    alert("Moto: " + res.data.chassi + ' - ' + res.data.modelo + " atualizada com sucesso!")
                    navigateToMotos()
                } else {
                    alert('Erro ao atualizar moto! \nStatus: ' + res.status)
                }
            })
            .catch(err => alert('Erro ao atualizar moto! \nStatus: ' + err.response.data.status + '\n' + err.response.data.message))
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
                            <label className="text-base text-black" htmlFor="txtModelo">Modelo</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setModelo(event.target.value)}
                                value={modelo}
                                type="text"
                                name="modelo"
                                id="txtModelo"
                                placeholder="Digite aqui o modelo"
                                size="20"
                                maxlength="20"
                                required
                            /><br />
                            <label className="text-base text-black" htmlFor="txtMarca">Marca</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setMarca(event.target.value)}
                                value={marca}
                                type="text"
                                name="txtMarca"
                                id="txtMarca"
                                placeholder="Digite aqui a marca"
                                size="20"
                                maxlength="20"
                                required
                            /><br />

                            <label className="text-base text-black" htmlFor="txtTipoMoto">Tipo da Moto</label>
                            <select
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setIdTipoMoto(event.target.value)}
                                value={idTipoMoto}
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

                            <label className="text-base text-black" htmlFor="anoFabricacao">Ano Fabricação</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setAnoFab(event.target.value)}
                                value={anoFab}
                                type="number"
                                name="anoFabricacao"
                                id="anoFabricacao"
                                min={1900}
                                placeholder="aaaa"
                                required
                            /><br />

                            <label className="text-base text-black" htmlFor="anoModelo">Ano Modelo</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setAnoModelo(event.target.value)}
                                value={anoModelo}
                                type="number"
                                name="anoModelo"
                                id="anoModelo"
                                min={1900}
                                placeholder="aaaa"
                                required
                            /><br />

                            <label className="text-base text-black" htmlFor="txtCor">Cor</label>
                            <select
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setCor(event.target.value)}
                                value={cor}
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

                            <label className="text-base text-black" htmlFor="txtCombustivel">Combustivel</label>
                            <select
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setCombustivel(event.target.value)}
                                value={combustivel}
                                name="Combustivel"
                                id="txtCombustivel"
                                placeholder="Informe o combustivel da moto"
                                required
                            >
                                <option value="" selected disabled hidden>Selecione a cor</option>
                                <option value="Gasolina">Gasolina</option>
                                <option value="Flex">Flex</option>
                            </select><br />

                            <label className="text-base text-black" htmlFor="numCC">Cilindrada</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setCilindrada(event.target.value)}
                                value={cilindrada}
                                type="number"
                                name="numCC"
                                id="numCC"
                                min="0"
                                placeholder="Digite aqui a cilindrada da moto"
                                required
                            /><br />

                            <label className="text-base text-black" htmlFor="txtChassi">Chassi</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setChassi(event.target.value)}
                                value={chassi}
                                type="text"
                                name="Chassi"
                                id="txtChassi"
                                placeholder="Digite aqui o chassi"
                                size="20"
                                maxlength="20"
                                required
                            /><br />

                            <label className="text-base text-black" htmlFor="txtPlaca">Placa</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setPlaca(event.target.value)}
                                value={placa}
                                type="text"
                                name="Placa"
                                id="txtPlaca"
                                placeholder="Digite no formato XXX-0000"
                                pattern="[A-Z]{3}-[0-9]{4}"
                            /><br />

                            <label className="text-base text-black" htmlFor="numValor">Valor</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setValor(event.target.value)}
                                value={valor}
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