import { useNavigate } from "react-router-dom"
import './Header.css'

export function Header() {
    const navigate = useNavigate()

    function toHome(path) {
        navigate(path === 'home' ? '/' : `/${path}`)
    }

    return (
        <header>
            <img onClick={() => toHome('home')} className="logo" src='imgs/logo/logoBatman.png' alt="logoBatman" />
            <nav className="nav-large">
                <ul>
                    <li onClick={() => toHome('home')}>Home</li>
                    <li onClick={() => toHome('photos')}>Fotos</li>
                    <li onClick={() => toHome('comments')}>Comentários</li>
                    <li onClick={() => toHome('contacts')}>Contatos</li>
                </ul>
            </nav>
        </header>
    )
}