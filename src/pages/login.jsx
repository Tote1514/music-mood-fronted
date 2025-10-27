import "../styles/login.css";

import { useState } from "react";

import { FaSpotify } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { FaSmile } from "react-icons/fa";
import { MdPlaylistAdd } from "react-icons/md";

import NavBar from "../components/NavBar";

export default function Login() {


  const handleOnClick = () => {
    window.location.href = "http://localhost:8000/auth/login";
  };


  return (
    <>
    <NavBar links={[]}/>
    <main>
        <div className="login-container container">
          <h1>Bem-vindo a MusicMood</h1>
          <p>
            Faça login com a sua conta do Spotify para conversar com o assistente e receber recomendações personalizadas de músicas.
          </p>
          <button className="spotify-login" onClick={handleOnClick}><FaSpotify /> Login com Spotify</button>
        </div>
        <div className="features-container container">
          <div className="feature">
            <CiChat1 size={100} color="var(--cor-borda)"/>
            <div>
              <h3>Converse sobre suas músicas</h3>
              <p>
              Converse de forma natural com o assistente e receba recomendações de músicas sem complicação.
            </p>
          </div>
        </div>

        <div className="feature">
          <FaSmile size={75} color="var(--cor-borda)" />
          <div>
            <h3>Análise de Emoções</h3>
            <p>
              O MusicMood entende o que você está sentindo a partir das suas mensagens e identifica seu humor em tempo real para sugerir as melhores músicas.
            </p>
          </div>
      </div>

        <div className="feature">
          <MdPlaylistAdd size={100} color="var(--cor-borda)"/>
          <div>
            <h3>Crie playlists instantaneamente</h3>
            <p>
              Com base na emoção detectada, o sistema cria playlists personalizadas que combinam com o seu momento.
            </p>
          </div>
        </div>

      </div>
    </main>
    </>
  );
}