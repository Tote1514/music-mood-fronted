import "../styles/Song.css"

export default function Song({ song }) {
  return (
    <a href={song.url} target="_blank" rel="noopener noreferrer">
      <div className="song-container">
      <div className="song-info">
        <img 
          src={song.albumCover} 
          alt={`Capa do álbum ${song.name}`} 
        />
        <div className="song-text">
          <span className="song-name">{song.name}</span>
          <span className="song-artist">{song.artist}</span>
        </div>
      </div>
    </div>
    </a>
  )
}
