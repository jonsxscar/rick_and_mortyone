import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Routes, Route} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Favorites from "./components/favorites/Favorites"
import Detail from "./components/detail/Detail";
import Error404 from "./components/error404/Error404";
import Form from "./components/form/Form";

function App() {
  const [ characters, setCharacters ] = useState([]);
  const [access, setAccess] = useState(false);

  const onSearch = (id) => {
    if(!id) alert('Ingresa un ID')
    if(characters.find(char => char.id === parseInt(id) )){
      alert(`Ya existe el personaje con el id ${id}`)
      return;
    }
  axios(`https://rickandmortyapi.com/api/character/${id}`)
  .then(({data}) => {
      if(data.name){
        setCharacters((oldChars)=> [...oldChars, data])
      }
  })
  .catch(err => alert(err.response.data.error))
  }

  
  function onClose(id){
    setCharacters(characters.filter(char => char.id !== id))
  }

  const EMAIL = "jonsxscar@gmail.com";
  const PASSWORD = "1234";
  const navigate = useNavigate();
  const location = useLocation();

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
}

useEffect(() => {
  !access && navigate('/');
}, [access]);

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" 
        element={<Form setAccess={setAccess} login={login}/>} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="*" element={<Error404/>}/>
      </Routes>
    
    </div>
  );
}

export default App;

//   function onSearch(id) {
//     fetch(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.json())
//     .then(( data ) => {
//        if (data.name) {
//           setCharacters((oldChars) => [...oldChars, data]);
//        } else {
//           alert('¡No hay personajes con este ID!');
//        }
//     });
//  }