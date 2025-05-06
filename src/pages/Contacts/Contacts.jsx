import './Contacts.css'
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/header";

export function Contacts() {
    return (
        <>
            <Header />
            <div className="contacts-container">
                <div className="content">
                    <div className="contacts">
                        <a href="https://diogog-dev.github.io/Portifolio/" target="_blank" rel="noopener noreferrer">
                            <div className="links">
                                <i className='bx bx-book-open'></i>
                                <h3>Meu Portifólio</h3>
                            </div>
                        </a>
                        <a href="https://github.com/DiogoG-dev" target="_blank" rel="noopener noreferrer">
                            <div className="links">
                                <i className='bx bxl-github' ></i>
                                <h3>GitHub</h3>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/diogogabriel-developer/" target="_blank" rel="noopener noreferrer">
                            <div className="links">
                                <i className='bx bxl-linkedin'></i>
                                <h3>LinkedIn</h3>
                            </div>
                        </a>
                        <a href="mailto:diogogabriel.tech@gmail.com">
                            <div className="links">
                                <i className='bx bxl-gmail'></i>
                                <h3>E-mail</h3>
                            </div>
                        </a>
                    </div>
                    <div className="send-message">
                        <h1>Contate-me!</h1>
                        <input type="text" placeholder="Nome Completo" />
                        <input type="email" placeholder="E-mail" />
                        <input type="text" placeholder="Assunto" />
                        <textarea rows="4" placeholder="Menssagem"></textarea>
                        <button className="button">Enviar Menssagem</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}