import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Title } from "../../../components/Title";

import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";

import axios from "axios";

const API = 'http://localhost:8080'

export function DeleteRevisao() {

    const [revisao, setRevisao] = useState('')

    const navigate = useNavigate();
    const navigateToRevisoes = () => {
        navigate('/revisao');
    };
    let params = useParams();

    useEffect(() => {
        axios.get(`${API}/revisoes/${params.codRevisao}`)
            .then(res => {
                setRevisao(res.data)
            })
            .catch(err => alert(err.response.data.message))
    }, []);

    function DeleteRevisao() {
        axios.delete(`${API}/revisoes/${params.codRevisao}`)
            .then(res => {
                if (res.status === 204) {
                    alert("Revisão deletada com sucesso!")
                    navigateToRevisoes()
                } else {
                    alert('Erro ao deletar Revisão! \nStatus: ' + res.status)
                }
            })
            .catch(err => alert('Erro ao deletar Revisão! \nStatus: ' + err.response.data.status + '\n' + err.response.data.message))

    }
    return (
        <div className="w-full h-full">
            <div className="flex flex-col">
                <Header />
                <div className="flex flex-row">
                    <Sidebar />
                    <div className="flex flex-col items-center w-screen pt-10 min-w-0">
                        <Title title="Deletar Revisão" />

                        <div className="flex flex-col items-center w-full mt-8">
                            <h5>Deseja deletar a revisão selecionada codRevisao: {revisao.codRevisao}?</h5>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-row justify-center">
                                <button className="p-1 mt-5 bg-gray-700 hover:bg-red-600 rounded-md text-white w-[100px] mb-12 mr-4" onClick={DeleteRevisao} type="button">Confirmar</button>
                                <button className="p-1 mt-5 border-2 border-gray-700 hover:bg-red-600 hover:border-red-600 hover:text-white rounded-md text-black w-[100px] mb-12 ml-4" onClick={navigateToRevisoes} type="reset">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}