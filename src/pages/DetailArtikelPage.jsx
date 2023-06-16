import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import './DetailArtikelPage.css'
import { useLocation } from "react-router-dom";

function DetailArtikelPage(){
const current = new Date();
const Location = useLocation();
const data = Location.state
const konten = data.konten
    return(
        <>
            <Navbar/>
            <div className="ContainerDetail">
                <h1>{data.title}</h1>
                <p className="ArtikelDate">{data.tanggal}</p>
                <img src={data.image} alt="" className="ImgDetailArtikel"/>
                <div dangerouslySetInnerHTML={{__html:konten}}>
                    
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default DetailArtikelPage