import "../styles/Playlist.css"

import { useState } from "react"

export default function Moods({ moods = [], onRecommend }) {
    const [loading, setLoading] = useState(false);

    const handleCreateRecommendations = async () => {
        setLoading(true);
        await onRecommend(moods);
    }

    return (
        <>
            <div className="message bot">
                <h2>Ok, entendi. Você está se sentindo:</h2>

                {moods.length === 0 ? (
                    <p>
                        Não consegui identificar seu humor. 
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
                    disabled={loading}
                >
                    Me dá recomendações
                </button>
            </div>
        </>
    )
}