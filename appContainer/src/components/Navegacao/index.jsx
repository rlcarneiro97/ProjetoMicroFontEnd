import React, { Suspense } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";

const ListarClientesApp = React.lazy(() => import('listar/ListarClientesApp'));
const CadastrarClienteApp = React.lazy(() => import('cadastrar/CadastrarClienteApp'));
const DetalheClienteApp = React.lazy(() => import('detalhe/DetalheClienteApp'));

export function Navegacao(){
    const navegacao = useNavigate();

    // console.log(window.location.pathname);
    var param = window.location.pathname.split("/");
    // console.log(param);
    // console.log(param[2]);
    param = Number.parseInt(param[2], 10);
    // console.log(param);
    var id = param;

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