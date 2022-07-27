import { Route, Routes, Navigate } from "react-router-dom";
import React from 'react';
import { Home } from './pages/Home'
import { Cliente } from './pages/CRUD/Cliente/Cliente'
import { Comissao } from './pages/CRUD/Comissao/Comissao'
import { Funcionario } from './pages/CRUD/Funcionario/Funcionario'
import { Login } from './pages/Login'
import { Moto } from './pages/CRUD/Moto/Moto'
import { Venda } from './pages/Processos/Venda'
import { Recall } from './pages/Processos/Recall'
import { ComissaoFuncionario } from './pages/Processos/ComissaoFuncionario'
import { Revisao } from './pages/Processos/Revisao'
import { R_Comissao } from './pages/Relatorios/R_Comissao'
import { R_MotosVendidas } from './pages/Relatorios/R_MotosVendidas'
import { R_Produtos } from './pages/Relatorios/R_Produtos'
import { R_Revisao } from './pages/Relatorios/R_Revisao'
import { CreateMoto } from "./pages/CRUD/Moto/CreateMoto";
import { CreateFuncionario } from "./pages/CRUD/Funcionario/CreateFuncionario";

export function Router() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cliente" element={<Cliente />} />
            <Route path="/comissao" element={<Comissao />} />
            
            <Route path="/funcionario" element={<Funcionario />} />
            <Route path="/funcionario/createFuncionario" element={<CreateFuncionario />} />

            <Route path="/moto" element={<Moto />} />
            <Route path="/moto/createMoto" element={<CreateMoto />} />

            <Route path="/venda" element={<Venda />} />
            <Route path="/recall" element={<Recall />} />
            <Route path="/comissaoFuncionario" element={<ComissaoFuncionario />} />
            <Route path="/revisao" element={<Revisao />} />
            <Route path="/r_MotosVendidas" element={<R_MotosVendidas />} />
            <Route path="/r_Comissao" element={<R_Comissao />} />
            <Route path="/r_Produtos" element={<R_Produtos />} />
            <Route path="/r_Revisao" element={<R_Revisao />} />
        </Routes>
    );
}