import React from "react";
import Jogador from "./Jogador";

function JogadorList(props){
    return(
        <div className="mt-4">
            <div className="row fw-bold border-bottom pb-2 mb-2 text-dark">
                <div className="col-4 text-start">NOME</div>
                <div className="col-2 text-center">IDADE</div>
                <div className="col-4 text-start">TIME</div>
                <div className="col-2 text-center">AÇÕES</div>
            </div>
            <ul className="list-unstyled">
                {props.jogadorList && props.jogadorList.map((jogador, indice) => (
                    <Jogador 
                        jogador={jogador} 
                        key={indice} 
                        prepararEdicao={props.prepararEdicao} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default JogadorList;