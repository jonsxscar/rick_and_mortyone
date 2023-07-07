import { Btn, DivSearch, Input } from "./searchStyle";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  function handleChange(evento) {
    // console.log(evento.target.value);
    setId(evento.target.value);
  }

  function handleKeyPress(evento) {
    if (evento.key === "Enter") {
      search();
    }
  }

  const search = () => {
    onSearch(id);
    setId("");
  };

  return (
    <DivSearch>
      <Input
        type="search"
        onChange={handleChange}
        onKeyPress={handleKeyPress}//actualizar esta en desuso
        value={id}
        placeholder="Ingresa Id..."
      />
      <Btn onClick={search}>Agregar</Btn>
    </DivSearch>
  );
}
