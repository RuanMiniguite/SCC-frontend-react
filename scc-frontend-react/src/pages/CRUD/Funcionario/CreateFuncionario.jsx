import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import React from "react";

export function CreateFuncionario() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col items-center w-screen pt-5 min-w-0">
            <h1 className="uppercase scale-125 text-center">Cadastro de Funcionário</h1>
            <form className="flex flex-col mt-7" action="http://localhost:8080/funcionarios" datatype="Json" method="post">

            <label className="text-base text-black" for="txtNomeCompleto">Nome Completo</label>
            <input className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="NomeCompleto" id="txtNomeCompleto" placeholder="Digite aqui o nome" size="20" maxlength="20" autocomplete="off" required /><br />

            <label for="txtCpf">CPF</label>
            <input className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="cpf" id="txtCpf" placeholder="Digite aqui o cpf somente numeros" autocomplete="off" required /><br />

            <label for="txtTelefone">Telefone</label>
            <input className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="telefone" id="txtTelefone" placeholder="Digite no formato (xx)xxxxx-xxxx" pattern="\(\[0-9]{2}\)\ [0-9]{4,6}-[0-9]{3,4}$" required /><br />

            <label for="dtNascimento">Data de Nascimento</label>
            <input className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="date" name="DataNascimento" id="dtNascimento" min="1900-01-01" max="2022-12-31" required /><br />

            <br />

            <label for="txtEstado">Estado</label>
            <input className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="Estado" id="txtEstado" list="estado" placeholder="Informe Estado" required /><br />
            <datalist id="estado">
                <option value="AC"></option>
                <option value="AL"></option>
                <option value="AP"></option>
                <option value="AM"></option>
                <option value="BA"></option>
                <option value="CE"></option>
                <option value="DF"></option>
                <option value="ES"></option>
                <option value="GO"></option>
                <option value="MA"></option>
                <option value="MT"></option>
                <option value="MS"></option>
                <option value="MG"></option>
                <option value="PA"></option>
                <option value="PB"></option>
                <option value="PR"></option>
                <option value="PE"></option>
                <option value="PI"></option>
                <option value="RJ"></option>
                <option value="RN"></option>
                <option value="RS"></option>
                <option value="RO"></option>
                <option value="RR"></option>
                <option value="SC"></option>
                <option value="SP"></option>
                <option value="SE"></option>
                <option value="TO"></option>
            </datalist>

            <label for="txtCep">Cep</label>
            <input className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="cep" id="txtCep" placeholder="Digite no formato xxxxx-xxx" pattern="[0-9]{5}-[0-9]{3}" required /><br />

            <label for="txtCidade">Cidade</label>
            <input className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="Cidade" id="txtCidade" placeholder="Digite aqui a cidade" title="Digite aqui a cidade!" required /><br />

            <label for="txtBairro">Bairro</label>
            <input className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="Bairro" id="txtBairro" placeholder="Digite aqui o bairro" title="Digite aqui o bairro!" required /><br />

            <br />

            <label for="txtEmail">E-mail</label>
            <input className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="email" name="Email" id="txtEmail" placeholder="Digite aqui o E-mail" required /><br />

            <label for="txtSenha">Senha</label>
            <input className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="password" name="Senha" id="txtSenha" placeholder="Mínimo de 5 caracteres" pattern="[0-9]{5}" required /><br />

            <label for="txtCargo">Cargo</label>
            <input className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" name="Cargo" id="txtCargo" list="cargo" placeholder="Informe Cargo" required /><br />
            <datalist id="cargo">
                <option value="Gerente"></option>
                <option value="Vendedor"></option>
                <option value="Mecânico"></option>
                <option value="Outro"></option>
            </datalist>

            <label for="txtSalario">Salario</label>
            <input className="bg-transparent min-h-[35px] w-[500px] border border-gray-300 text-base px-2" type="text" id="txtSalario" name="Salario" placeholder="Digite aqui o salario" required />
            <div className="flex flex-col items-center">
              <button className="p-1 mt-5 bg-gray-700 hover:bg-red-600 rounded-md text-white w-[100px] mb-12" type="submit">Salvar</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}