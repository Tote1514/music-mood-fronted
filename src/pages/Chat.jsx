import NavBar from "../components/NavBar"
import { FaUser } from "react-icons/fa"
import "../styles/Chat.css"
import { useState } from "react"

export default function Chat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  const links = [{ path: "/profile", label: "", icon: <FaUser /> }]

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
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
