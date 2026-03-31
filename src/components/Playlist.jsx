import "../styles/Playlist.css"

import { createPlaylist } from "../api/musicApi"

import Song from "./Song"


//mocking values to test integration with api 

const track_uris = [
    "spotify:track:5TxRUOsGeWeRl3xOML59Ai",
    "spotify:track:0DwVNspGmrWAWFnbjMa2FZ",
    "spotify:track:5Th1SPySWgYlkXXC6wLMwL",
    "spotify:track:27a1mYSG5tYg7dmEjWBcmL"
]

export default function Playlist({playlist}) {

    const handleCreatePlaylist = async () => {
        //const trackUris = playlist.map(song => song.uri)
        //const playlistUrl = await createPlaylist("Minha Playlist", trackUris);
        const playlistUrl = await createPlaylist("Playlist do tcc", "Playlist criada pelo MusicMood", track_uris);
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