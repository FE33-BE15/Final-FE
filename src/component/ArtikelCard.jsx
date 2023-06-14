import "./ArtikelCard.css"
import reactLogo from '../assets/react.svg'
import { Link } from "react-router-dom"

function ArtikelCard() {
    return(
        <>
            <div className="card">
                <img src={reactLogo} alt="foto" />
                <p className="title">Pola Hidup Sehat Dengan Menerapkan Pedoman Gizi Seimbang.</p>
                <Link to='/Artikel/detail'>selengkapnya</Link> 
            </div>
        </>
    )
}
export default ArtikelCard