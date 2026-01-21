import "../styles/Playlist.css"

import { createPlaylist } from "../api/musicApi"

import Song from "./Song"

export default function Playlist({playlist}) {

    const handleCreatePlaylist = async () => {
        const trackUris = playlist.map(song => song.uri)
        const playlistUrl = await createPlaylist("Minha Playlist", trackUris);
        window.open(playlistUrl, "_blank");
    }

    return (
        <div className="message bot playlist">
            <h2>Sua Playlist Personalizada</h2>
            {playlist.length === 0 ? (
                <p>Nenhuma música na playlist.</p>
            ) : (
                playlist.map((song) => (
                    <Song song={song} />
                ))
            )}
            <button onClick={handleCreatePlaylist}>Criar Playlist</button>
        </div>
    )
}