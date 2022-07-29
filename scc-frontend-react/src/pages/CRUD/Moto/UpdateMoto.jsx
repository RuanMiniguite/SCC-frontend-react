import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Title } from "../../../components/Title";

import { useNavigate, useParams } from 'react-router-dom';
import { FormEvent, useState, useEffect } from "react";
import React from "react";

import axios from "axios";

const API = 'http://localhost:8080'


export function UpdateMoto() {
    const navigate = useNavigate();

    const [codCliente, setCodCliente] = useState('')
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
                setCodCliente(res.data.cliente.codCliente)
            })
            .catch(err => alert(err.response.data.message))
    }, []);

    let handleSubmit = async (e) => {
        e.preventDefault();

        await axios.put(`${API}/motos/${params.codMoto}`, {
            cliente: { codCliente: codCliente }, codMoto: params.codMoto, modelo, marca, tipoMoto: { codTipo: idTipoMoto, nome: tipoMotoNome }, anoFabricacao: anoFab, anoModelo, cor, combustivel, cc: cilindrada, chassi, placa, valor,
        })
            .then(res => {
                if (res.status === 200) {
                    alert("Moto: " + res.data.chassi + " atualizada com sucesso!")
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
                            <label className="text-base text-black" for="txtModelo">Modelo</label>
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
                            <label className="text-base text-black" for="txtMarca">Marca</label>
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

                            <label className="text-base text-black" for="txtTipoMoto">Tipo da Moto</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setIdTipoMoto(event.target.value)}
                                value={idTipoMoto}
                                type="text"
                                name="Moto"
                                id="txtTipoMoto"
                                list="tipoMoto"
                                placeholder="Informe o tipo da moto"
                                required
                            /><br />

                            <datalist id="tipoMoto">
                                <option value="1" label="Street"></option>
                                <option value="2" label="Adventure"></option>
                                <option value="3" label="Off Road"></option>
                                <option value="4" label="Sport"></option>
                                <option value="5" label="Touring"></option>
                                <option value="0" label=""></option>
                            </datalist>

                            <label className="text-base text-black" for="anoFabricacao">Ano Fabricação</label>
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

                            <label className="text-base text-black" for="anoModelo">Ano Modelo</label>
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

                            <label className="text-base text-black" for="txtCor">Cor</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setCor(event.target.value)}
                                value={cor}
                                type="text"
                                name="Cor"
                                id="txtCor"
                                list="cor"
                                placeholder="Informe a cor da moto"
                                required
                            /><br />

                            <datalist id="cor">
                                <option value="Branco"></option>
                                <option value="Vermelha"></option>
                                <option value="Preto"></option>
                                <option value="Cinza"></option>
                                <option value="Azul"></option>
                                <option value="Vender"></option>
                                <option value="Amarela"></option>
                            </datalist>

                            <label className="text-base text-black" for="txtCombustivel">Combustivel</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setCombustivel(event.target.value)}
                                value={combustivel}
                                type="text"
                                name="Combustivel"
                                id="txtCombustivel"
                                list="combustivel"
                                placeholder="Informe o combustivel da moto"
                                required
                            /><br />

                            <datalist id="combustivel">
                                <option value="Gasolina"></option>
                                <option value="Flex"></option>
                            </datalist>

                            <label className="text-base text-black" for="numCC">Cilindrada</label>
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

                            <label className="text-base text-black" for="txtChassi">Chassi</label>
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

                            <label className="text-base text-black" for="txtPlaca">Placa</label>
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

                            <label className="text-base text-black" for="numValor">Valor</label>
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
                                        className="w-[100px] text-white mb-11 bg-green-700 rounded-md p-1 m-1 mt-5 hover:bg-green-600"
                                        type="submit">Salvar
                                    </button>
                                    <button
                                        className="w-[100px] text-white mb-11 bg-red-700 rounded-md p-1 m-1 mt-5 hover:bg-red-500"
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