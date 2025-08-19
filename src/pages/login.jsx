import "../styles/login.css";

import { useState } from "react";

import { FaSpotify } from "react-icons/fa";
import NavBar from "../components/NavBar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
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
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-container">
            <label className="password-label" 
                  htmlFor="password">
                    Senha: 
                    <small>
                      <a href="#">Esqueceu a senha?</a>
                    </small>
            </label>
            <input value={password} 
                  id="password" 
                  type="password" 
                  name="password" 
                  required
                  placeholder="Digite sua senha"
                  onChange={(e) => setPassword(e.target.value)} />
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