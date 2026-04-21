import NavBar from "../components/NavBar"
import GenerosInput from "../components/GenerosInput"
import Playlist from "../components/Playlist"
import LoadingMessage from "../components/LoadingMessage"
import { useUserContext } from "../contex/UserContext"
import { getAccessToken, getMoodsFromText, getRecommendations, getUserProfile } from "../api/musicApi"

import { FaUser } from "react-icons/fa"
import "../styles/Chat.css"
import { useState, useEffect, useRef } from "react"
import Moods from "../components/Moods"

export default function Chat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [moodsResponse, setMoodsResponse] = useState({})
  const [tracks, setTracks] = useState([])
  const [loadingTracks, setLoadingTracks] = useState(false)

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
    setLoading(true)

    const response = await getMoodsFromText(input)
    
    setMoodsResponse(response)
    updateUser({ hasSentText: true })
    setLoading(false)
  }


  const handleGetRecommendations = async () => {
      try {
        setLoadingTracks(true)
        const tracks = await getRecommendations(moodsResponse.moods)
        console.log("Recomendações recebidas:", tracks)
        setTracks(tracks || [])
      } catch (error) {
          console.error("Erro ao criar recomendações:", error);
      } finally {
          setLoadingTracks(false);
      }
  }

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
        {loading && <LoadingMessage text="Analisando seu texto..." />}
        {user.hasSentText && (
          <Moods 
            moods={moodsResponse.moods} 
            onRecommend={handleGetRecommendations}
          />
        )}
        {loadingTracks && (
          <LoadingMessage text="Criando sugestões de músicas..." />
        )}

        {tracks.length > 0 && (
          <Playlist playlist={tracks} />
        )}
        {/* Âncora de scroll */}
        <div ref={bottomRef} />
      </div>
      <form className="chat-input" 
            onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={!user.hasSelectedGenres || user.hasSentText}
        />
        <button type="submit" 
                disabled={!user.hasSelectedGenres || user.hasSentText}>
          Enviar
        </button>
      </form>
    </div>
  )
}
