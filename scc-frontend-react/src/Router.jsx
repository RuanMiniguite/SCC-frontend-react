import { Route, Routes, useParams } from "react-router-dom";
import React from 'react';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

import { Cliente } from './pages/CRUD/Cliente/Cliente';
import { CreateCliente } from './pages/CRUD/Cliente/CreateCliente';
import { DeleteCliente } from './pages/CRUD/Cliente/DeleteCliente';
import { UpdateCliente } from './pages/CRUD/Cliente/UpdateCliente';

import { Funcionario } from './pages/CRUD/Funcionario/Funcionario';
import { CreateFuncionario } from "./pages/CRUD/Funcionario/CreateFuncionario";
import { UpdateFuncionario } from "./pages/CRUD/Funcionario/UpdateFuncionario";
import { DeleteFuncionario } from "./pages/CRUD/Funcionario/DeleteFuncionario";

import { Moto } from './pages/CRUD/Moto/Moto';
import { CreateMoto } from "./pages/CRUD/Moto/CreateMoto";
import { UpdateMoto } from "./pages/CRUD/Moto/UpdateMoto";
import { DeleteMoto } from "./pages/CRUD/Moto/DeleteMoto";

import Comissao from './pages/CRUD/Comissao/Comissao';
import CreateComissao from './pages/CRUD/Comissao/CreateComissao';
import UpdateComissao from './pages/CRUD/Comissao/UpdateComissao';
import DeleteComissao from './pages/CRUD/Comissao/DeleteComissao';

import { Revisao } from './pages/Processos/Revisao/Revisao';
import { CreateRevisao } from "./pages/Processos/Revisao/CreateRevisao";
import { UpdateRevisao } from "./pages/Processos/Revisao/UpdateRevisao";
import { DeleteRevisao } from "./pages/Processos/Revisao/DeleteRevisao";

import { R_Comissao } from './pages/Relatorios/R_Comissao';
import { R_MotosVendidas } from './pages/Relatorios/R_MotosVendidas';
import { R_Produtos } from './pages/Relatorios/R_Produtos';
import { R_Revisao } from './pages/Relatorios/R_Revisao';

import { Venda } from './pages/Processos/Venda/Venda';
import { CreateVenda } from "./pages/Processos/Venda/CreateVenda";
import { UpdateVenda } from './pages/Processos/Venda/UpdateVenda';
import { DeleteVenda } from './pages/Processos/Venda/DeleteVenda';

import { Recall } from './pages/Processos/Recall/Recall';
import { CreateRecall } from './pages/Processos/Recall/CreateRecall';
import { DeleteRecall } from './pages/Processos/Recall/DeleteRecall';
import { UpdateRecall } from './pages/Processos/Recall/UpdateRecall';

import ComissaoFuncionario from './pages/Processos/ComissaoFuncionario/ComissaoFuncionario';
import CreateComissaoFuncionario from './pages/Processos/ComissaoFuncionario/CreateComissaoFuncionario';
import UpdateComissaoFuncionario from './pages/Processos/ComissaoFuncionario/UpdateComissaoFuncionario';
import DeleteComissaoFuncionario from './pages/Processos/ComissaoFuncionario/DeleteComissaoFuncionario';

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
            <Route path="/cliente/createCliente" element={<CreateCliente />} />
            <Route path="/cliente/deleteCliente/:codCliente" element={<DeleteCliente />} />
            <Route path="/cliente/updateCliente/:codCliente" element={<UpdateCliente />} />

            <Route path="/comissao" element={<Comissao />} />
            <Route path="/comissao/createComissao" element={<CreateComissao />} />
            <Route path="/comissao/updateComissao/:codComissao" element={<UpdateComissao />} />
            <Route path="/comissao/deleteComissao/:codComissao" element={<DeleteComissao />} />

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
            <Route path="/recall/createRecall" element={<CreateRecall />} />
            <Route path="/recall/deleteRecall/:codRealizarRecall" element={<DeleteRecall />} />
            <Route path="/recall/updateRecall/:codRealizarRecall" element={<UpdateRecall />} />

            <Route path="/comissaoFuncionario" element={<ComissaoFuncionario />} />
            <Route path="/comissaoFuncionario/createComissaoFuncionario" element={<CreateComissaoFuncionario />} />
            <Route path="/comissaoFuncionario/updateComissaoFuncionario/:codComissaoFuncionario" element={<UpdateComissaoFuncionario />} />
            <Route path="/comissaoFuncionario/deleteComissaoFuncionario/:codComissaoFuncionario" element={<DeleteComissaoFuncionario />} />

            <Route path="/revisao" element={<Revisao />} />
            <Route path="/revisao/createRevisao" element={<CreateRevisao />} />
            <Route path="/revisao/updateRevisao/:codRevisao" element={<UpdateRevisao />} />
            <Route path="/revisao/deleteRevisao/:codRevisao" element={<DeleteRevisao />} />

            <Route path="/r_Revisao" element={<R_Revisao />} />
            <Route path="/r_Produtos" element={<R_Produtos />} />
            <Route path="/r_MotosVendidas" element={<R_MotosVendidas />} />
            <Route path="/r_Comissao" element={<R_Comissao />} />
        </Routes>
    );
}