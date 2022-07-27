import { Link } from "react-router-dom";

export function Sidebar() {
    return (
        <aside className="w-[200px] bg-gray-700 border-l border-gray-600 min-h-screen">
            <div className="text-white">
                <nav>
                    <ul>
                        <Link to={'/funcionario'}>
                            <li className="py-4 px-5 hover:bg-red-600">
                                <i></i>
                                Funcionário
                            </li>
                        </Link>
                        <Link to={'/cliente'}>
                            <li className="py-4 px-5 hover:bg-red-600">
                                <i></i>
                                Cliente
                            </li>
                        </Link>                      
                        <Link to={'/comissao'}>
                            <li className="py-4 px-5 hover:bg-red-600">
                                <i></i>
                                Comissão
                            </li>
                        </Link>
                        <Link to={'/moto'}>
                            <li className="py-4 px-5 hover:bg-red-600">
                                <i></i>
                                Moto
                            </li>
                        </Link>
                        <hr />
                        <Link to={'/venda'}>
                            <li className="py-4 px-5 hover:bg-red-600">
                                <i></i>
                                Venda
                            </li>
                        </Link>
                        <Link to={'/comissaoFuncionario'}>
                            <li className="py-4 px-5 hover:bg-red-600">
                                <i></i>
                                Comissão Funcionário
                            </li>
                        </Link>
                        <Link to={'/recall'}>
                            <li className="py-4 px-5 hover:bg-red-600">
                                <i></i>
                                Recall
                            </li>
                        </Link>
                    
                        <Link to={'/revisao'}>
                            <li className="py-4 px-5 hover:bg-red-600">
                                <i></i>
                                Revisão
                            </li>
                        </Link>
                        <hr />
                        <Link to={'/r_Revisao'}>
                            <li className="py-4 px-5 hover:bg-red-600">
                                <i></i>
                                Relatório de Revisao
                            </li>
                        </Link>
                        <Link to={'/r_Produtos'}>
                            <li className="py-4 px-5 hover:bg-red-600">
                            <i></i>
                            Relatório de Produto
                            </li>
                        </Link>
                        <Link to={'/r_MotosVendidas'}>
                            <li className="py-4 px-5 hover:bg-red-600">
                            <i></i>
                            Relatório de Motos Vendidas
                            </li>
                        </Link>
                        <Link to={'/r_Comissao'}>
                            <li className="py-4 px-5 hover:bg-red-600">
                            <i></i>
                            Relatório de Comissao
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}