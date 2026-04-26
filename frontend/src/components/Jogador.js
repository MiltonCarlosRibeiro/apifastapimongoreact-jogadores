import React from "react";
import axios from "axios";

function Jogador(props){
    const excluiJogador = (jogadorId)=> {
        if(window.confirm(`Excluir ${props.jogador.nome}?`)){
            axios.delete(`http://127.0.0.1:8000/jogadores/${jogadorId}`)
                .then(() => { window.location.reload(); });
        }
    }

    return(
        <li className="border-bottom py-2">
            <div className="row align-items-center">
                <div className="col-4 text-start text-truncate">{props.jogador.nome}</div>
                <div className="col-2 text-center">{props.jogador.idade}</div>
                <div className="col-4 text-start">{props.jogador.time}</div>
                <div className="col-2 text-center d-flex justify-content-center gap-2">
                    <button 
                        onClick={() => props.prepararEdicao(props.jogador)} 
                        className="btn btn-outline-primary btn-sm"
                        title="Editar"
                    >
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onClick={() => excluiJogador(props.jogador.id)} className="btn btn-danger btn-sm" title="Excluir">
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        </li>
    );
}

export default Jogador;