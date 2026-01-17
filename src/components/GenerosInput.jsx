import { useState} from "react";
import Select  from 'react-select';
import "../styles/GenerosInput.css";

import { useUserContext } from "../contex/UserContext";

export default function GenerosInput() {
  const { user, updateUser } = useUserContext();
  const displayName = user.name || "amigo";
  const generos = [
    { value: "rock", label: "Rock" },
    { value: "pop", label: "Pop" },
    { value: "jazz", label: "Jazz" },
    { value: "classical", label: "Classical" },
    { value: "hiphop", label: "Hip Hop" },
    { value: "electronic", label: "Electronic" },
  ];
  
  const [generosSelected, setGenerosSelected] = useState([]);

  const handleChange = (e) => {
    const selectedValues = e ? e.map((option) => option.value) : [];
    setGenerosSelected(selectedValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(generosSelected);
    updateUser({ generos: generosSelected, hasSelectedGenres: true });
    resetSelection();
  };

  const resetSelection = () => {
    setGenerosSelected([]);
  };

  return (
    <div className="generos-input-container">
      <form onSubmit={handleSubmit}>
        <h2>Pra começar, quais estilos musicais você mais gosta de ouvir, {displayName}? 🎧</h2>
        {user.hasSelectedGenres ?
          (user.generos.length > 0 ?
            <p>Gêneros selecionados🎵 : {user.generos.join(", ")}</p>
            : <p>Nenhum gênero selecionado.</p>)
          :
        <Select
          isMulti
          name="generos"
          className="react-select-container"
          classNamePrefix="react-select"
          options={generos}
          closeMenuOnSelect={false}
          onChange={handleChange}
        />}
        <button type="submit"
                disabled={(user.generos.length > 0) || generosSelected.length === 0}>
                  Enviar 🎶
        </button>
      </form>
    </div>
  );
}
