import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Title } from "../../../components/Title";

import { useNavigate } from 'react-router-dom';
import React, { FormEvent, useState } from "react";


export function CreateRevisao() {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col">
                <Header />
                <div className="flex flex-row">
                    <Sidebar />
                    <div className="flex flex-col items-center min-w-0 w-screen">
                        <Title title="Cadastrar Revisão" />
                    </div>
                </div>
            </div>
        </div>
    );
}