import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from "react";
import React from "react";
import { Title } from "../../../components/Title";



export function CreateMoto() {

    const navigate = useNavigate();

    const [modelo, setModelo] = useState('')
    const [tipoMoto, setTipoMoto] = useState('')
    const [dataFab, setDataFab] = useState('')
    const [dataModelo, setDataModelo] = useState('')
    const [cor, setCor] = useState('')
    const [combustivel, setCombustivel] = useState('')
    const [cilindrada, setCilindrada] = useState('')
    const [chassi, setChassi] = useState('')
    const [placa, setPlaca] = useState('')
    const [valor, setValor] = useState('')
    const [motoVend, setMotoVend] = useState('')

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://webhook.site/4a80d66f-d12c-49c1-bcae-200481ce1eac", {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify({
                    modelo: modelo,
                    tipoMoto: tipoMoto,
                    dataFab: dataFab,
                    dataModelo: dataModelo,
                    cor: cor,
                    combustivel: combustivel,
                    cilindrada: cilindrada,
                    chassi: chassi,
                    placa: placa,
                    valor: valor,
                    motoVend: motoVend,
                }),
            });
            //let resJson = await res.json();
            if (res.status === 0) {
                //setModelo("");
                console.log("Motodo cadastrada com sucesso!")
                navigate('/moto')
                //setMessage("User created successfully");
            } else {
                console.log("Erro ao cadastrar moto!")
                navigate('/moto')
            }
        } catch (err) {
            console.log(err);
        }
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

                            <label className="text-base text-black" for="txtTipoMoto">Tipo da Moto</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setTipoMoto(event.target.value)}
                                type="text"
                                name="Moto"
                                id="txtTipoMoto"
                                list="tipoMoto"
                                placeholder="Informe o tipo da moto"
                                required
                            /><br />

                            <datalist id="tipoMoto">
                                <option value="Street"></option>
                                <option value="Adventure"></option>
                                <option value="Sport"></option>
                                <option value="Off Road"></option>
                                <option value="Touring"></option>
                                <option value=""></option>
                            </datalist>

                            <label className="text-base text-black" for="dtFabricacao">Data de Fabricação</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setDataFab(event.target.value)}
                                type="date"
                                name="DataFabricacao"
                                id="dtFabricacao"
                                min="1900-01-01"
                                max="2022-12-31"
                                required
                            /><br />

                            <label className="text-base text-black" for="dtModelo">Data do Modelo</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setDataModelo(event.target.value)}
                                type="date"
                                name="DataModelo"
                                id="dtModelo"
                                min="1900-01-01"
                                max="2022-12-31"
                                required
                            /><br />

                            <label className="text-base text-black" for="txtCor">Cor</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setCor(event.target.value)}
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

                            <label className="text-base text-black" for="txtCC">Cilindrada</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setCilindrada(event.target.value)}
                                type="number"
                                name="CC"
                                id="txtCC"
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

                            <label className="text-base text-black" for="txtValor">Valor</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={event => setValor(event.target.value)}
                                type="text"
                                id="txtValor"
                                name="Valor"
                                placeholder="Digite aqui o valor"
                                required
                            /><br />

                            <label className="text-base text-black" for="ChkPromos">Moto Vendida</label>
                            <input
                                className="bg-transparent min-h-[20px] w-[90px] border border-gray-300 text-base px-2"
                                onChange={event => setMotoVend(event.target.value)}
                                type="checkbox"
                                name="Promos"
                                id="Chkvendida"
                            />
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