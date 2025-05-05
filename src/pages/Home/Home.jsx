import './Home.css';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/Footer";

export function Home() {
    return (
        <>
            <Header />
            <div className="banner"></div>
            <div className="trailer-container">
                <div className="content">
                    <video controls class='trailer'>
                        <source src='video/BATMAN_Trailer_3_Oficial_Dublado.mp4' type='video/mp4' />
                    </video>
                    <div className="sinopse">
                        <p className='description'>
                            Batman (The Batman, no original) segue o segundo ano de Bruce Wayne (Robert Pattinson) como o herói de Gotham, 
                            enfrentando o crime e a corrupção na cidade. Com a ajuda de poucos aliados, ele investiga os crimes do vilão 
                            Charada e revela uma trama envolvendo sua família. Para combater a corrupção e descobrir a verdade sobre seu pai, 
                            Thomas Wayne, Batman precisa formar novas alianças e buscar justiça.
                        </p>
                        <button className='buy-button'>Comprar Ingresso</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}