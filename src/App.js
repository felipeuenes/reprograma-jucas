
import { useState } from 'react';
import './App.css';
import { Banner } from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';




function App() {

  const times = [
    {
    nome: 'Programação',
    corPrimaria: '#57c278',
    corSecundaria: '#d9f7e9',
  },
  {
    nome: 'Front-End',
    corPrimaria: '#82cffa',
    corSecundaria: '#e8f8ff',
  },{
    nome: 'Devops',
    corPrimaria: '#e06869',
    corSecundaria: '#fde7e8',
  },{
    nome: 'Data Science',
    corPrimaria: '#a6d157',
    corSecundaria: '#f0f8e2',
  },{
    nome: 'UX e Design',
    corPrimaria: '#db6fbf',
    corSecundaria: '#fae9f5',
  },{
    nome: 'Mobile',
    corPrimaria: '#ffba05',
    corSecundaria: '#fff5d9',
  },{
    nome: 'Inovação e Gestão',
    corPrimaria: '#ff8a29',
    corSecundaria: '#ffeedf',
  },
];

  const [colaboradores, setColaboradores] = useState([]);
  
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(times => <Time key={times.nome} nome={times.nome} corPrimaria={times.corPrimaria} corSecundaria={times.corSecundaria}/>)}
      
      
      
    </div>
  );
}

export default App;
