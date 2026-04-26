import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JogadorList from './components/JogadorList';

/**
 * @description Componente principal para gestão de jogadores.
 * @version 1.0.3 (Implementado CRUD completo: Create, Read, Update, Delete)
 */
function App() {
  const [jogadorList, setJogadorList] = useState([]); 
  const [jogadorNome, setJogadorNome] = useState('');
  const [jogadorIdade, setJogadorIdade] = useState(''); 
  const [jogadorTime, setJogadorTime] = useState('');
  const [jogadorId, setJogadorId] = useState(''); // Estado para controlar a Edição

  const buscarJogadores = () => {
    axios.get('http://127.0.0.1:8000/jogadores') 
      .then(resposta => {
        setJogadorList(resposta.data);
      }).catch((error) => { console.error(error); });
  };

  useEffect(() => { buscarJogadores(); }, []); 

  /**
   * @method prepararEdicao
   * @description Preenche os inputs com os dados do jogador selecionado.
   */
  const prepararEdicao = (jogador) => {
    setJogadorId(jogador.id);
    setJogadorNome(jogador.nome);
    setJogadorIdade(jogador.idade);
    setJogadorTime(jogador.time);
  };

  /**
   * @method salvarJogador
   * @description Decide entre POST (novo) ou PUT (edição) com base no jogadorId.
   */
  const salvarJogador = () => {
    const objetoJogador = {
      jogador_nome: jogadorNome,
      jogador_idade: String(jogadorIdade), 
      jogador_time: jogadorTime
    };

    if (jogadorId) {
      // MODO EDIÇÃO (PUT)
      axios.put(`http://127.0.0.1:8000/jogadores/${jogadorId}`, objetoJogador)
        .then(() => {
          alert("Atualizado com sucesso!");
          limparCampos();
        });
    } else {
      // MODO CADASTRO (POST)
      axios.post('http://127.0.0.1:8000/jogadores', objetoJogador)
        .then(() => {
          alert("Cadastrado com sucesso!");
          limparCampos();
        });
    }
  };

  const limparCampos = () => {
    setJogadorId('');
    setJogadorNome(''); 
    setJogadorIdade('');
    setJogadorTime('');
    buscarJogadores();
  };

  return (
    <div className='container'>
      <div className='mt-3 mx-auto' style={{ "width": "60vw", "backgroundColor": "#ffffff" }}>
        <h2 className='text-center text-white bg-success card mb-4 p-5'>Gerenciamento de Jogadores</h2>
        
        <div className='card-body text-center'>
          <h5 className='card text-center text-white bg-dark p-3'>
            {jogadorId ? 'Editando Jogador' : 'Cadastro do Jogador'}
          </h5>
          <div className='card-text'>
            <input className='mb-2 form-control' placeholder='Nome' value={jogadorNome} onChange={(e) => setJogadorNome(e.target.value)} />
            <input className='mb-2 form-control' placeholder='Idade' value={jogadorIdade} onChange={(e) => setJogadorIdade(e.target.value)} />
            <input className='mb-2 form-control' placeholder='Time' value={jogadorTime} onChange={(e) => setJogadorTime(e.target.value)} />
            
            <button className={`btn ${jogadorId ? 'btn-warning' : 'btn-outline-success'} mb-3 mt-2`} onClick={salvarJogador}>
              {jogadorId ? 'ATUALIZAR' : 'CADASTRAR'}
            </button>
            {jogadorId && <button className='btn btn-link mb-3 mt-2' onClick={limparCampos}>Cancelar</button>}
          </div>
          
          <h5 className='card-text text-center text-white bg-dark mt-3 p-3'>Lista de Jogadores</h5>
          <JogadorList jogadorList={jogadorList} prepararEdicao={prepararEdicao} />
        </div>
        <h6 className='card text-center text-light bg-success mt-4 p-5'>&copy;CodeTI-2026</h6>
      </div>
    </div>
  );
}

export default App;