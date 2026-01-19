import "../styles/Playlist.css"

import Song from "./Song"

export default function Playlist({playlist}) {
    return (
        <div className="playlist-container">
            <h2>Sua Playlist Personalizada</h2>
            {playlist.length === 0 ? (
                <p>Nenhuma música na playlist.</p>
            ) : (
                playlist.map((song) => (
                    <Song song={song} />
                ))
            )}
        </div>
    )
}