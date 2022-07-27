import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from "react";
import React from "react";

export function UpdateFuncionario() {

  const navigate = useNavigate();

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center w-screen pt-10 min-w-0">
            <h1 className="uppercase scale-125 text-center text-2xl tracking-widest">UpdateFuncionario</h1>
          </div>
        </div>
      </div>
    </div>
  );
}