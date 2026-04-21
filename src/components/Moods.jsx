import "../styles/Playlist.css"

import { getRecommendations } from "../api/musicApi"
import LoadingMessage from "./LoadingMessage"

import { useState } from "react"

export default function Moods({ moods = [] }) {
    const [loading, setLoading] = useState(false);

    const handleCreateRecommendations = async () => {
        try {
            setLoading(true);
            const tracks = await getRecommendations(moods);
            console.log("Recomendações recebidas:", tracks);

        } catch (error) {
            console.error("Erro ao criar recomendações:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="message bot">
                <h2>Ok, entendi. Você está se sentindo:</h2>

                {moods.length === 0 ? (
                    <p>
                        Não consegui identificar seu humor. 
                        Tente escrever de outra forma.
                    </p>
                ) : (
                    <p>
                        {moods.map((m, i) => (
                            <span key={i}>
                                {m.label} ({(m.score * 100).toFixed(0)}%)
                                {i < moods.length - 1 && " e "}
                            </span>
                        ))}
                    </p>
                )}

                <button 
                    onClick={handleCreateRecommendations} 
                    disabled={loading || moods.length === 0}
                >
                    Me dá recomendações
                </button>
            </div>

            {loading && (
                <LoadingMessage text="Criando sugestões de músicas..." />
            )}
        </>
    )
}