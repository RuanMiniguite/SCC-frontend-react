import { Route, Routes } from "react-router-dom";
import React from 'react';
import { Home } from './pages/Home'
import { Cliente } from './pages/Cliente'
import { Comissao } from './pages/Comissao'
import { Funcionario } from './pages/Funcionario'
import { Login } from './pages/Login'
import { Moto } from './pages/Moto'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cliente" element={<Cliente />}/>
            <Route path="/comissao" element={<Comissao />}/>
            <Route path="/funcionario" element={<Funcionario />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/moto" element={<Moto />}/>
        </Routes>
    );
}