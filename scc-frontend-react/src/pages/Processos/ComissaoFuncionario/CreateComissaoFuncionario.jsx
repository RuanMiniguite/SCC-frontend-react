import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";

const API = 'http://localhost:8080';

const CreateComissaoFuncionario = () => {

    const navigate = useNavigate();

    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
    const [funcionarios, setFuncionarios] = useState([]);
    const [vendas, setVendas] = useState([]);
    const [taxaComissao, setTaxaComissao] = useState({});

    const [funcionarioSelecionado, setFuncionarioSelecionado] = useState('');
    const [vendaSelecionada, setVendaSelecionada] = useState('');

    const [pago, setPago] = useState('')

    useEffect(() => {
        axios.get(`${API}/funcionarios`)
            .then(response => {
                setFuncionarios(response.data);
            })
    }, []);

    useEffect(() => {
        if (funcionarioSelecionado) {
            axios.get(`${API}/vendas/findByFuncionario/${funcionarios[funcionarioSelecionado].codFuncionario}`)
                .then(response => {
                    setVendas(response.data);
                })

            axios.get(`${API}/taxacomissao/findByFuncionario/${funcionarios[funcionarioSelecionado].codFuncionario}`)
                .then(response => {
                    // console.log(response.data)
                    // console.log(vendas[vendaSelecionada].valor, taxaComissao["taxa"], (taxaComissao["taxa"] / 100))
                    setTaxaComissao(response.data);
                })
        }
    }, [funcionarioSelecionado])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const codVenda = vendas[vendaSelecionada].codVenda;

        await axios.post(`${API}/comissaovendas`, {
            dataIni: dataInicio,
            dataFim: dataFim,
            valorTotal: 0,
            pago,
            taxaComissao: {
                codTaxaComissao: taxaComissao.codTaxaComissao
            },
            venda: {
                codVenda,
                funcionario: {
                    codFuncionario: funcionarios[funcionarioSelecionado].codFuncionario,
                }
            }
        }).then(response => {
            alert('Comissão da Venda: ' + codVenda + ' realizada com sucesso!');
            navigateToComissaoFuncionario();
        }).catch(error => {
            alert('Erro ao realizar Comissão da Venda! \nStatus: ' + error.response.data.status + '\n' + error.response.data.message);
        });
    }

    const navigateToComissaoFuncionario = () => {
        navigate('/comissaoFuncionario');
    }

    const calcularComissao = () => {
        return taxaComissao["taxa"] && vendas[vendaSelecionada] ? ((vendas[vendaSelecionada].valor - vendas[vendaSelecionada].desconto) * (taxaComissao["taxa"] / 100)).toFixed(2) : 0
    }

    return (
        <div className="w-full h-full">
            <div className="flex flex-col">
                <Header />
                <div className="flex flex-row">
                    <Sidebar />
                    <div className="flex flex-col items-center min-w-0 w-screen">
                        <Title title="Cadastro de Comissão Funcionário" />

                        <form className="flex flex-col mt-10" onSubmit={handleSubmit} method="post">

                            <label htmlFor="dataInicio">Data Início</label>
                            <input onChange={e => setDataInicio(e.target.value)} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="date" name="data" id="dataInicio" value={dataInicio} min="1900-01-01" max="2022-12-31" required /><br />

                            <label htmlFor="dataFim">Data Fim</label>
                            <input onChange={e => setDataFim(e.target.value)} className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="date" name="data" id="dataFim" value={dataFim} min="1900-01-01" max="2022-12-31" required /><br />

                            <label className="text-base text-black" htmlFor="funcionario">Funcionário</label>
                            <select className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" onChange={e => setFuncionarioSelecionado(e.target.value)} name="funcionario" id="funcionario" list="funcionario" placeholder="Selecione o funcionário" required>
                                <option value="" selected disabled hidden>Selecione o Funcionário</option>
                                {funcionarios.map((funcionario, index) => (
                                    <option key={index} value={index}>{funcionario.nome}</option>
                                ))}
                            </select><br />

                            <label className="text-base text-black" htmlFor="venda">Venda</label>
                            <select className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" onChange={e => setVendaSelecionada(e.target.value)} name="venda" id="venda" list="venda" placeholder="Selecione a venda" required>
                                <option value="" selected disabled hidden>Selecione a Venda</option>
                                {vendas.map((venda, index) => {
                                    const { moto } = venda;
                                    return (
                                        <option key={index} value={index}>{moto.chassi + ' - ' + moto.modelo + ' - ' + moto.anoFabricacao + '/' + moto.anoModelo}</option>
                                    )
                                })}
                            </select><br />

                            <label htmlFor="Valor">Valor</label>
                            <input className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" id="valor" name="valor" value={calcularComissao()} readOnly /><br />

                            <label className="text-base text-black" htmlFor="pago">Comissão Paga</label>
                            <input onChange={e => setPago(e.target.checked)} className="bg-transparent min-h-[20px] w-[90px] border border-gray-300 text-base px-2" type="checkbox" name="pago" id="pago" />

                            <div className="flex flex-row justify-center">
                                <button className="p-1 mt-5 bg-gray-700 hover:bg-red-600 rounded-md text-white w-[100px] mb-12 mr-4" type="submit">Salvar</button>
                                <button className="p-1 mt-5 border-2 border-gray-700 hover:bg-red-600 hover:border-red-600 hover:text-white rounded-md text-black w-[100px] mb-12 ml-4" type="reset" onClick={navigateToComissaoFuncionario}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateComissaoFuncionario;