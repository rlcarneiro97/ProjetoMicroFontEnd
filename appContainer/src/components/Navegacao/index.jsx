import React, { Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const ListarClientesApp = React.lazy(() => import('listar/ListarClientesApp'));
const CadastrarClienteApp = React.lazy(() => import('cadastrar/CadastrarClienteApp'));
const DetalheClienteApp = React.lazy(() => import('detalhe/DetalheClienteApp'));

export function Navegacao(){
    const navegacao = useNavigate();

    let param = window.location.pathname.split("/");
    let id = Number.parseInt(param[2], 10);

    return(
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <ListarClientesApp />
                </Suspense>
            }/>

            <Route path="/detalhe/:id" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <DetalheClienteApp id={id} />
                </Suspense>
            }/>

            <Route path="/cadastrar" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <CadastrarClienteApp navegar={navegacao}/>
                </Suspense>
            }/>
        </Routes>
    );
}