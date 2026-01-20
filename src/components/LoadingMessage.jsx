import "../styles/LoadingMessage.css";

export default function LoadingMessage() {
  return (
    <div className="message bot loading">
      <p>Entendendo seu humor e preparando suas recomendações musicais</p>
      <div className="spinner" aria-label="Carregando"></div>
    </div>
  )
}
