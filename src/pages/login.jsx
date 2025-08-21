import "../styles/login.css";

import { useState } from "react";

import { FaSpotify } from "react-icons/fa";
import NavBar from "../components/NavBar";

export default function Login() {
  const [formData, setFormData] = useState({
        email: '',
        senha: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      email: '',
      senha: ''
    });
    
  };

  const links = [
    { path: "/cadastro", label: "Cadastre-se"}
  ];

  return (
    <div className="page-layout">
      <NavBar links={links} />
      <div className="login-container">
        <h1>Faça Login</h1>
        <form className="login-form">
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input id="email" 
                  type="email" 
                  name="email" 
                  required
                  placeholder="Digite seu email"
                  value={formData.email}
                  onChange={handleChange} />
          </div>
          <div className="input-container">
            <label className="password-label" 
                  htmlFor="password">
                    Senha: 
                    <small>
                      <a href="#">Esqueceu a senha?</a>
                    </small>
            </label>
            <input type="password" 
                           id="senha" 
                           placeholder="Senha"
                           value={formData.senha}
                           onChange={handleChange}
                           required />
          </div>
          <button type="submit"
                  onClick={handleSubmit}>
                    Entrar
          </button>
        </form>
        <p>Ou, entre com</p>
        <button className="spotify-login"><FaSpotify /> Conta do Spotify</button>
        <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
      </div>
    </div>
  );
}