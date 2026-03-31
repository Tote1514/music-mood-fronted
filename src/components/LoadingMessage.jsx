import "../styles/LoadingMessage.css";

export default function LoadingMessage({ text }) {
  return (
    <div className="message bot loading">
      <p>{text}</p>
      <div className="spinner" aria-label="Carregando"></div>
    </div>
  )
}
