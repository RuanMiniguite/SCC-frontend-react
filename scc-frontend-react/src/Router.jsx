import { Route, Routes, Navigate } from "react-router-dom";
import React from 'react';
import { Home } from './pages/Home'
import { Cliente } from './pages/Cliente'
import { Comissao } from './pages/Comissao'
import { Funcionario } from './pages/Funcionario'
import { Login } from './pages/Login'
import { Moto } from './pages/Moto'

export function Router(user) {
    return (
        <>
            <Routes>
                <Route path="/"
                    element={
                        <ProtectedRoute user={user}>
                            <Home />
                        </ProtectedRoute>
                    }
                />

                <Route path="/cliente" element={<Cliente />} />
                <Route path="/comissao" element={<Comissao />} />
                <Route path="/funcionario" element={<Funcionario />} />
                <Route path="/moto" element={<Moto />} />
            </Routes>
        </>

    );
}

const ProtectedRoute = ({ user, children }) => {
    if (!user) {
        return <Navigate to={<Login />} replace />;
    }

    return children;
};