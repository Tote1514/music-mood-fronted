import "../styles/Song.css"

export default function Song({ song }) {
  return (
    <a href={song.spotify_url} target="_blank" rel="noopener noreferrer">
      <div className="song-container">
      <div className="song-info">
        <img 
          src={song.album_cover_url} 
          alt={`Capa do álbum ${song.name}`} 
        />
        <div className="song-text">
          <span className="song-name">{song.name}</span>
          {song.artists && (
            <span className="song-artists">
              {song.artists.join(", ")}
            </span>
          )}
        </div>
      </div>
    </div>
    </a>
  )
}
