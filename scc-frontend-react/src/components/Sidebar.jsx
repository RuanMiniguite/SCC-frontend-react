import { Link } from "react-router-dom";

export function Sidebar() {
    return (
        <aside className="w-[200px] bg-gray-700 border-l border-gray-600 h-screen absolute">
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
                    </ul>
                </nav>
            </div>
        </aside>
    )
}