import { useState} from "react";
import Select  from 'react-select';
import "../styles/GenerosInput.css";

export default function GenerosInput() {
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
    resetSelection();
  };

  const resetSelection = () => {
    setGenerosSelected([]);
  };

  return (
    <div className="generos-input-container">
      <form onSubmit={handleSubmit}>
        <h2>Me diz que gêneros você gosta? 🙂</h2>
        <Select
          isMulti
          name="generos"
          options={generos}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
