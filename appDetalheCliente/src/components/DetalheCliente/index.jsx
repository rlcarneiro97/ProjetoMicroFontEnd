import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { api } from "../../services/api";

export default function DetalheCliente(clienteId){

    const [clientes, setClientes] = useState({
        id: null, 
        nome: "", 
        peso: null, 
        altura: null,
        sexo: "", 
        imc: 0.0,
    });

    useEffect(()=>{
        getClientes();
    },[]);

    async function getClientes(){
        // console.log(clienteId);
        const response = await api.get("/clientes/"+clienteId.id);
        setClientes(response.data);
    }

    return(
        <Table striped bordered>
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Peso</th>
                    <th scope="col">Altura</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">IMC</th>
                </tr>
            </thead>
            <tbody>
                { 
                    <tr key={clientes.id}>
                        <td>{clientes.id}</td>
                        <td>{clientes.nome}</td>
                        <td>{clientes.peso}</td>
                        <td>{clientes.altura}</td>
                        <td>{clientes.sexo}</td>
                        <td>{clientes.imc.toFixed(2)}</td>    
                    </tr>
                }
            </tbody>
        </Table>
    );
}