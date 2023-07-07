import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Favorites from "./components/favorites/Favorites";
import Detail from "./components/detail/Detail";
import Error404 from "./components/error404/Error404";
import Form from "./components/form/Form";

const EMAIL = "jonsxscar@gmail.com";
const PASSWORD = "123456";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onSearch = (id) => {
    if (!id) {
      alert("Ingresa un ID");
      return;
    }

    if (characters.find((char) => char.id === parseInt(id))) {
      alert(`Ya existe el personaje con el ID ${id}`);
      return;
    }

    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      })
      .catch((err) => alert(err.response.data.error));
  };

  const onClose = (id) => {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
  };

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    if (!access) {
      navigate("/");
    }
  }, [access, navigate]);

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form setAccess={setAccess} login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
