import NavBar from "../components/NavBar"
import GenerosInput from "../components/GenerosInput"
import Playlist from "../components/Playlist"
import LoadingMessage from "../components/LoadingMessage"
import { useUserContext } from "../contex/UserContext"
import { getAccessToken, getRecommendations, getUserProfile } from "../api/musicApi"

import { FaUser } from "react-icons/fa"
import "../styles/Chat.css"
import { useState, useEffect, useRef } from "react"

export default function Chat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const links = [{ path: "/profile", label: "", icon: <FaUser /> }]

  const { updateUser, user } = useUserContext()
  const bottomRef = useRef(null);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const displayName = await getAccessToken().
        then(token => {
          console.log("Token de acesso:", token)
          return getUserProfile(token)
        });
        console.log("Usuário:", displayName)
        if (displayName) {
          updateUser({ name: displayName.split(" ").at(0) })
        }
      } catch (error) {
        console.error("Erro ao buscar usuário:", error)
      }

    }

    fetchUser()
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (e) => {
    e.preventDefault()
    if (input.trim() === "") return

    // adiciona mensagem do usuário
    setMessages((prev) => [...prev, { text: input, sender: "user" }])

    setInput("")

    //setLoading(true)
    //const playlist = await getRecommendations(input, user.selectedGenres)
    //setLoading(false)
  }

  // Mockando uma playlist para demonstração
  const playlist = [
    { name:"Palavras No Corpo",
      artist:"Gal Costa",
      albumCover:"https://i.scdn.co/image/ab67616d0000485149c56bae9ff226e14a6463df",
      url : "https://open.spotify.com/track/4xeP4rHORzLbJlaJVHWybQ"
    },
    {
      name:"Só Louco",
      artist:"Gal Costa",
      albumCover:"https://i.scdn.co/image/ab67616d00004851d940f0bee97f370629880123",
      url : "https://open.spotify.com/track/2bLx1WMPGQKDme8WdGfpIs"
    },
    {
      name: "Maçã",
      artist: "Djavan",
      albumCover: "https://i.scdn.co/image/ab67616d000048517064b0c1e363cd14a0f34205",
      url : "https://open.spotify.com/track/4INDXtb5SbTP5ATwE5BEwr"
    },
    {
      name: "Gostoso Demais",
      artist: "Maria Bethânia",
      albumCover: "https://i.scdn.co/image/ab67616d00004851e4a0614c3363bb5243943625",
      url : "https://open.spotify.com/track/7FplawKc9l5GVtFS1IXK6D"
    },
    {
      name: "Numa sala de reboco",
      artist: "Luiz Gonzaga",
      albumCover: "https://i.scdn.co/image/ab67616d00004851360fea7a74ca6d7c299f50ce",
      url : "https://open.spotify.com/track/7q6zyz40cyqctGM446Q5MQ"
    },
    {
      name: "O Trem Azul",
      artist: "Lô Borges",
      albumCover: "https://i.scdn.co/image/ab67616d0000485136ebd83756dae33f2504dc40",
      url : "https://open.spotify.com/track/0lq9TEXMVVSDcaj1azH6Po"
    },
    {
      name: "Eternamente",
      artist: "Gal Costa",
      albumCover: "https://i.scdn.co/image/ab67616d00004851e23d92dee8de17a0680bb278",
      url : "https://open.spotify.com/track/1ngbz6irbfEmpsYcZhzX6L"
    },
    {
      name: "Mutante",
      artist: "Rita Lee",
      albumCover: "https://i.scdn.co/image/ab67616d0000485100369fc7d9da78f863b28e6c",
      url : "https://open.spotify.com/track/5rShS5dwU8nIe21jlQnbxK"
    },
    {
      name: "Tenha calma",
      artist: "Maria Bethânia",
      albumCover: "https://i.scdn.co/image/ab67616d0000485145b46596d237c0707a3440e3",
      url : "https://open.spotify.com/track/6pSGoOZ03OYjHuXhgSqsi6"
    },
    {
      name: "Azul",
      artist: "Gal Costa",
      albumCover: "https://i.scdn.co/image/ab67616d0000485126b451720e2bed283f0c63da",
      url : "https://open.spotify.com/track/6VeAUISn8bNaW4OUa2oWi2"
    }
  ]

  return (
    <div>
      <NavBar links={links} />
      <div className="chat-container">
        <GenerosInput displayName={user.name} />
        {user.hasSelectedGenres && (
          <div className="message bot">
            <h3>E hoje, como você está se sentindo? Pode falar do seu jeito 🙂</h3>
          </div>
          )}
        {messages.map((msg, index) => (
          <div key={index} 
                className={`message ${msg.sender}`}>
            <h3>{msg.text}</h3>
          </div>
        ))}
        {loading && <LoadingMessage text="Entendendo seu humor e preparando suas recomendações musicais" />}
        {user.hasSelectedGenres && <Playlist playlist={playlist} />}
        {/* Âncora de scroll */}
        <div ref={bottomRef} />
      </div>
      <form className="chat-input" 
            onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={!user.hasSelectedGenres}
        />
        <button type="submit" 
                disabled={!user.hasSelectedGenres}>
          Enviar
        </button>
      </form>
    </div>
  )
}
