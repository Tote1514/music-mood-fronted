import { useState} from "react";
import Select  from 'react-select';
import "../styles/GenerosInput.css";

import { useUserContext } from "../contex/UserContext";

export default function GenerosInput() {
  const { user, updateUser } = useUserContext();
  const displayName = user.name || "amigo";
  const generos = [
    { value: "pop", label: "Pop" },
    { value: "rock", label: "Rock" },
    { value: "hip hop", label: "Hip Hop" },
    { value: "r-n-b", label: "R&B" },
    { value: "indie", label: "Indie" },
    { value: "electronic", label: "Electronica" },
    { value: "jazz", label: "Jazz" },
    { value: "acoustic", label: "Acústica" },
    { value: "classical", label: "Música Clássica" },
    { value: "funk", label: "Funk" },
    { value: "mpb", label: "MPB" },
    { value: "samba", label: "Samba" },
    { value: "sertanejo", label: "Sertanejo" },
    { value: "pagode", label: "Pagode" },
    { value: "forro", label: "Forró" },
    { value: "latin", label: "Latina" },
    { value: "reggaeton", label: "Reggaeton" },
    { value: "reggae", label: "Reggae" },
    { value: "soul", label: "Soul" },
    { value: "alt-rock", label: "Rock Alternativo" },
  ];
  
  const [generosSelected, setGenerosSelected] = useState([]);

  const handleChange = (e) => {
    const selectedValues = e ? e.map((option) => option.value) : [];
    setGenerosSelected(selectedValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ generos: generosSelected, hasSelectedGenres: true });
    resetSelection();
  };

  const resetSelection = () => {
    setGenerosSelected([]);
  };

  return (
    <div className="message bot generos-input">
      <form onSubmit={handleSubmit}>
        <h2>Pra começar, quais estilos musicais você mais gosta de ouvir, {displayName}? 🎧</h2>
        {user.hasSelectedGenres ?
          (user.generos.length > 0 ?
           <p>
            Gêneros selecionados 🎵:{" "}
            {user.generos
              .map((genero) => 
                generos.find((g) => g.value === genero)?.label || genero
              )
              .join(", ")}
            </p>
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
