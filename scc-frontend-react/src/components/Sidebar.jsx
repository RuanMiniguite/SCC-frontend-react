import { Link } from "react-router-dom";

export function Sidebar() {
    return (
        <aside className="w-[200px] bg-gray-700 border-l border-gray-600 min-h-screen">
            <div className="text-white">
                <nav>
                    <ul>
                        <li className="py-4 px-5 hover:bg-red-600">
                            <Link to={'/funcionario'}>
                                <i></i>
                                Funcionário
                            </Link>
                        </li>
                        <li className="py-4 px-5 hover:bg-red-600">
                            <Link to={'/cliente'}>
                                <i></i>
                                Cliente
                            </Link>
                        </li>
                        <li className="py-4 px-5 hover:bg-red-600">
                            <Link to={'/comissao'}>
                                <i></i>
                                Comissão
                            </Link>
                        </li>
                        <li className="py-4 px-5 hover:bg-red-600">
                            <Link to={'/moto'}>
                                <i></i>
                                Moto
                            </Link>
                        </li>
                        <hr />
                        <li className="py-4 px-5 hover:bg-red-600">
                            <Link to={'/venda'}>
                                <i></i>
                                Venda
                            </Link>
                        </li>
                        <li className="py-4 px-5 hover:bg-red-600">
                            <Link to={'/comissaoFuncionario'}>
                                <i></i>
                                Comissão Funcionário
                            </Link>
                        </li>
                        <li className="py-4 px-5 hover:bg-red-600">
                            <Link to={'/recall'}>
                                <i></i>
                                Recall
                            </Link>
                        </li>
                        <li className="py-4 px-5 hover:bg-red-600">
                            <Link to={'/revisao'}>
                                <i></i>
                                Revisão
                            </Link>
                        </li>
                        <hr />

                        <li className="py-4 px-5 hover:bg-red-600">
                            <Link to={'/r_Revisao'}>
                                <i></i>
                                Relatório de Revisao
                            </Link>
                        </li>
                        <li className="py-4 px-5 hover:bg-red-600">
                            <Link to={'/r_Produtos'}>
                                <i></i>
                                Relatório de Produto
                            </Link>
                        </li>
                        <li className="py-4 px-5 hover:bg-red-600">
                            <Link to={'/r_MotosVendidas'}>
                                <i></i>
                                Relatório de Motos Vendidas
                            </Link>
                        </li>
                        <li className="py-4 px-5 hover:bg-red-600">
                            <Link to={'/r_Comissao'}>
                                <i></i>
                                Relatório de Comissao
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}