import { Route, Routes, useParams } from "react-router-dom";
import React from 'react';
import { Home } from './pages/Home'
import { Cliente } from './pages/CRUD/Cliente/Cliente'
import { Comissao } from './pages/CRUD/Comissao/Comissao'
import { Funcionario } from './pages/CRUD/Funcionario/Funcionario'
import { CreateFuncionario } from "./pages/CRUD/Funcionario/CreateFuncionario";
import { Login } from './pages/Login'
import { Moto } from './pages/CRUD/Moto/Moto'
import { Recall } from './pages/Processos/Recall'
import { ComissaoFuncionario } from './pages/Processos/ComissaoFuncionario'
import { Revisao } from './pages/Processos/Revisao/Revisao'
import { R_Comissao } from './pages/Relatorios/R_Comissao'
import { R_MotosVendidas } from './pages/Relatorios/R_MotosVendidas'
import { R_Produtos } from './pages/Relatorios/R_Produtos'
import { R_Revisao } from './pages/Relatorios/R_Revisao'
import { CreateMoto } from "./pages/CRUD/Moto/CreateMoto";
import { UpdateMoto } from "./pages/CRUD/Moto/UpdateMoto";
import { DeleteMoto } from "./pages/CRUD/Moto/DeleteMoto";
import { UpdateFuncionario } from "./pages/CRUD/Funcionario/UpdateFuncionario";
import { DeleteFuncionario } from "./pages/CRUD/Funcionario/DeleteFuncionario";
import { CreateRevisao } from "./pages/Processos/Revisao/CreateRevisao";
import { Venda } from './pages/Processos/Venda/Venda';
import { CreateVenda } from "./pages/Processos/Venda/CreateVenda";
import { UpdateVenda } from './pages/Processos/Venda/UpdateVenda';
import { DeleteVenda } from './pages/Processos/Venda/DeleteVenda';

function ProfilePage() {
    // Get the userId param from the URL.
    let { codMoto } = useParams();
    // ...
}


export function Router() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cliente" element={<Cliente />} />
            <Route path="/comissao" element={<Comissao />} />

            <Route path="/funcionario" element={<Funcionario />} />
            <Route path="/funcionario/createFuncionario" element={<CreateFuncionario />} />
            <Route path="/funcionario/updateFuncionario/:codFuncionario" element={<UpdateFuncionario />} />
            <Route path="/funcionario/deleteFuncionario/:codFuncionario" element={<DeleteFuncionario />} />

            <Route path="/moto" element={<Moto />} />
            <Route path="/moto/createMoto" element={<CreateMoto />} />
            <Route path="/moto/updateMoto/:codMoto" element={<UpdateMoto />} />
            <Route path="/moto/deleteMoto/:codMoto" element={<DeleteMoto />} />

            <Route path="/venda" element={<Venda />} />
            <Route path="/venda/createVenda" element={<CreateVenda />} />
            <Route path="/venda/updateVenda/:codVenda" element={<UpdateVenda />} />
            <Route path="/venda/deleteVenda/:codVenda" element={<DeleteVenda />} />

            <Route path="/recall" element={<Recall />} />
            <Route path="/comissaoFuncionario" element={<ComissaoFuncionario />} />

            <Route path="/revisao" element={<Revisao />} />
            <Route path="/revisao/createRevisao" element={<CreateRevisao />} />

            <Route path="/r_MotosVendidas" element={<R_MotosVendidas />} />
            <Route path="/r_Comissao" element={<R_Comissao />} />
            <Route path="/r_Produtos" element={<R_Produtos />} />
            <Route path="/r_Revisao" element={<R_Revisao />} />
        </Routes>
    );
}