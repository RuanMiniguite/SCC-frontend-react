import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import axios from "axios";

import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Title } from "../../../components/Title";


const API = 'http://localhost:8080';

const DeleteComissao = () => {

    const navigate = useNavigate();
    const params = useParams();

    const [comissao, setComissao] = useState('');

    useEffect(() => {
        axios.get(`${API}/taxacomissao/${params.codComissao}`)
            .then(res => {
                setComissao(res.data)
            })
            .catch(err => alert(err.response.data.message))
    }, []);

    const deleteComissao = () => {
        axios.delete(`${API}/taxacomissao/${params.codComissao}`)
            .then(res => {
                if (res.status === 204) {
                    alert("Comissão deletada com sucesso!");
                    navigateToComissoes();
                } else {
                    alert('Erro ao deletar comissão! \nStatus: ' + res.status);
                }
            })
            .catch(err => alert('Erro ao deletar comissão! \nStatus: ' + err.response.data.status + '\n' + err.response.data.message));
    }

    const navigateToComissoes = () => {
        navigate('/comissao');
    }

    return (
        <div className="w-full h-full">
            <div className="flex flex-col">
                <Header />
                <div className="flex flex-row">
                    <Sidebar />
                    <div className="flex flex-col items-center w-screen pt-10 min-w-0">
                        <Title title="Deletar Comissão" />

                        <div className="flex flex-col items-center w-full mt-8">
                            <h5>Deseja deletar a comissão selecionada: Id: {comissao.codTaxaComissao} - Cargo: {comissao.cargo} - Anos de casa: {comissao.anoCasa} - Taxa: {comissao.taxa} - Valor limite: {comissao.valorLimite}?</h5>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-row justify-center">
                                <button className="p-1 mt-5 bg-gray-700 hover:bg-red-600 rounded-md text-white w-[100px] mb-12 mr-4" onClick={deleteComissao} type="button">Confirmar</button>
                                <button className="p-1 mt-5 border-2 border-gray-700 hover:bg-red-600 hover:border-red-600 hover:text-white rounded-md text-black w-[100px] mb-12 ml-4" onClick={navigateToComissoes} type="reset">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteComissao;