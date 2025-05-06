import './Photos.css'
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/header";

export function Photos() {
    return (
        <>
            <Header />
            <div className="photos-container">
                <div className="photos-content">
                    <div className="photo photo-1">Capa Filme Poster</div>
                    <div className="photo photo-2">Batman Poster</div>
                    <div className="photo photo-3">Bruce Wayne</div>
                    <div className="photo photo-4">Mulher Gato</div>
                    <div className="photo photo-5">O Charada</div>
                    <div className="photo photo-6">Mulher Gato e Batman</div>
                    <div className="photo photo-7">Batman com Batmóvel</div>
                    <div className="photo photo-8">Alfred Pennyworth</div>
                    <div className="photo photo-9">Carmine Falcone</div>
                    <div className="photo photo-10">Pinguim</div>
                    <div className="photo photo-11">Batmóvel</div>
                    <div className="photo photo-12">NO MORE LIES - Vítima</div>
                </div>
            </div>
            <Footer />
        </>
    )
}