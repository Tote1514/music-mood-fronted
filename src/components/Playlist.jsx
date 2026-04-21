import "../styles/Playlist.css"

import { createPlaylist } from "../api/musicApi"
import Song from "./Song"
import LoadingMessage from "./LoadingMessage"

import { useState } from "react"


export default function Playlist({playlist}) {
    const [loading, setLoading] = useState(false);

    const handleCreatePlaylist = async () => {
        setLoading(true);
        const track_uris = playlist.map(song => song.uri)
        console.log("Track URIs para criar playlist:", track_uris);
        console.log("Criando playlist com as seguintes músicas:", playlist);
        const playlistUrl = await createPlaylist("MoodFlow", "Playlist criada pelo MusicMood", track_uris);
        window.open(playlistUrl, "_blank");
        setLoading(false);
    }

    return (
        <>
            <div className="message bot playlist">
                <h2>Sua Playlist Personalizada</h2>
                {playlist.length === 0 ? (
                    <p>Nenhuma música na playlist.</p>
                ) : (
                    playlist.map((song) => (
                        <Song song={song} key={song.uri} />
                    ))
                )}
                <button onClick={handleCreatePlaylist} disabled={loading}>Criar Playlist</button>
            </div>
            {loading && <LoadingMessage text="Criando sua playlist no Spotify..." />}
        </>
        
    )
}