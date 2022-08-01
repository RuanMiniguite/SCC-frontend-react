import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from "react";

import axios from "axios";

import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Title } from "../../../components/Title";


const API = 'http://localhost:8080'

const CreateComissao = () => {

    const navigate = useNavigate();

    const [taxa, setTaxa] = useState('');
    const [valorLimite, setValorLimite] = useState('');
    const [anoCasa, setAnoCasa] = useState('');
    const [cargo, setCargo] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post(`${API}/taxacomissao`, {
            taxa, valorLimite, anoCasa, cargo
        })
            .then(res => {
                res.status === 200 ? navigate('/comissao') : alert(res.status)
            })
            .catch(err => alert(err.response.data.message))
    };

    const navigateToComissoes = () => {
        navigate('/comissao');
    };

    return (
        <div className="w-full h-full">
            <div className="flex flex-col">
                <Header />
                <div className="flex flex-row">
                    <Sidebar />
                    <div className=" flex flex-col items-center min-w-0 pt-5 w-screen">
                        <Title title="Cadastrar Comissão" />
                        <form className="flex flex-col mt-7" onSubmit={handleSubmit} method="post">

                            <label className="text-base text-black" htmlfor="cargo">Cargo</label>
                            <select
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={e => setCargo(e.target.value)}
                                name="cargo"
                                id="cargo"
                                placeholder="Informe o cargo"
                                required
                            >
                                <option value="" selected disabled hidden>Selecione o cargo</option>
                                <option value="Vendedor">Vendedor</option>
                                <option value="Gerente">Gerente</option>
                            </select><br />

                            <label className="text-base text-black" htmlfor="anoCasa">Anos de casa</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={e => setAnoCasa(e.target.value)}
                                type="number"
                                name="anoCasa"
                                id="anoCasa"
                                value={anoCasa}
                                placeholder="Digite aqui os anos de casa"
                                min={0}
                                required
                            /><br />

                            <label className="text-base text-black" htmlfor="taxa">Taxa</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={e => setTaxa(e.target.value)}
                                type="text"
                                name="taxa"
                                id="taxa"
                                value={taxa}
                                placeholder="Digite aqui a taxa"
                                size="20"
                                maxlength="20"
                                required
                            /><br />

                            <label className="text-base text-black" htmlfor="valorLimite">Valor Limite</label>
                            <input
                                className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2"
                                onChange={e => setValorLimite(e.target.value)}
                                type="text"
                                name="valorLimite"
                                id="valorLimite"
                                value={valorLimite}
                                placeholder="Digite o valor limite"
                                size="20"
                                maxlength="20"
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
                                        type="button" onClick={navigateToComissoes}>Cancelar
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

export default CreateComissao