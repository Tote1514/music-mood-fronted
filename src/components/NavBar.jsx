import "../styles/navBar.css";
import { FaMusic } from "react-icons/fa";

export default function NavBar({links}) {
    return (
        <nav className="navbar">
            <div className="logo">
                <FaMusic />
                <h2>MusicMood</h2>
            </div>
            <ul>
                {links.map(link => (
                    <li key={link.path}>
                        <a href={link.path}>
                            {link.icon && <span className="icon">{link.icon}</span>}
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
