import { useNavigate } from "react-router-dom"
import './Header.css'
import { useEffect } from "react";

export function Header() {
    // Navegação
    const navigate = useNavigate()

    function toHome(path) {
        navigate(path === 'home' ? '/' : `/${path}`)
    }

    // Lida com o comportamento do Menu e Navegação Mobile
    function toggleMenu() {
        const smallNav = document.querySelector('.small-nav');
        const menuHamburguer = document.querySelector('.menu-hamburguer');

        menuHamburguer.classList.toggle('change')

        smallNav.style.display = menuHamburguer.classList.contains('change') ? 'block' : 'none';
    }
     
    // Atribui ao Menu o evento de Clique
    useEffect(() => {
        const menuHamburguer = document.querySelector('.menu-hamburguer');
        if (menuHamburguer) {
            menuHamburguer.addEventListener('click', toggleMenu)
        }
    }, [])

    return (
        <header>
            <img onClick={() => toHome('home')} className="logo" src='/imgs/logo/logoBatman.png' alt="logoBatman" />
            <nav className="large-nav">
                <ul>
                    <li onClick={() => toHome('home')}>Home</li>
                    <li onClick={() => toHome('photos')}>Fotos</li>
                    <li onClick={() => toHome('comments')}>Comentários</li>
                    <li onClick={() => toHome('contacts')}>Contatos</li>
                </ul>
            </nav>

            <div className="menu-hamburguer">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

            <nav className="small-nav">
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