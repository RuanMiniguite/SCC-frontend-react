import { Route, Routes, Navigate } from "react-router-dom";
import React from 'react';
import { Home } from './pages/Home'
import { Cliente } from './pages/Cliente'
import { Comissao } from './pages/Comissao'
import { Funcionario } from './pages/Funcionario'
import { Login } from './pages/Login'
import { Moto } from './pages/Moto'
import { Venda } from './pages/Venda'
import { Recall } from './pages/Recall'
import { ComissaoFuncionario } from './pages/ComissaoFuncionario'
import { Revisao } from './pages/Revisao'
import { R_Comissao } from './pages/R_Comissao'
import { R_MotosVendidas } from './pages/R_MotosVendidas'
import { R_Produtos } from './pages/R_Produtos'
import { R_Revisao } from './pages/R_Revisao'

export function Router() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cliente" element={<Cliente />} />
            <Route path="/comissao" element={<Comissao />} />
            <Route path="/funcionario" element={<Funcionario />} />
            <Route path="/moto" element={<Moto />} />
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