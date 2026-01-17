import NavBar from "../components/NavBar"
import GenerosInput from "../pages/GenerosInput"
import { useUserContext } from "../contex/UserContext"

import { FaUser } from "react-icons/fa"
import "../styles/Chat.css"
import { useState, useEffect } from "react"

export default function Chat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  const links = [{ path: "/profile", label: "", icon: <FaUser /> }]

  const { updateUser, user } = useUserContext()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const displayName = params.get("display_name")
    if (displayName)
    {
      updateUser({ name: displayName.split(" ").at(0) })
      window.history.replaceState({}, document.title, "/chat")
    }

  }, [])

  const handleSend = (e) => {
    e.preventDefault()
    if (input.trim() === "") return

    // adiciona mensagem do usuário
    setMessages((prev) => [...prev, { text: input, sender: "user" }])

    // simula resposta do bot
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Olá, como posso ajudar?", sender: "bot" }])
    }, 500)

    setInput("")
  }

  return (
    <div>
      <NavBar links={links} />
      <div className="chat-container">
        <GenerosInput displayName={user.name} />
        {messages.map((msg, index) => (
          <div key={index} 
                className={`message ${msg.sender}`}>
            <span>{msg.text}</span>
          </div>
        ))}
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
