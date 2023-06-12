import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import Fitur1 from '../assets/Track.jpg'
import Fitur2 from '../assets/Recom.jpg'
import Fitur3 from '../assets/Carbon.jpg'
import section1 from '../assets/picture 1.jpg'
import section2 from '../assets/picture 3.jpg'
import section3 from '../assets/picture 2.jpg'
import './HomePage.css'
import { Link } from "react-router-dom"

function HomePage (){
    return(
        <>
        <Navbar/>
        <section className="Section1">
            <div>
                <h1>Membantu Menjaga Kalori</h1>
                <p> 
                    Program diet ini hadir untuk membantu setiap orang
                    untuk menjaga kesehatan mereka berdasarkan 
                    makanan yang mereka konsumsi
                </p>
                <span>Join Us</span>
            </div>
            <div>
                <img src={section1} alt="Membantu Menjaga Kalori" className="FotoSection1" />
            </div>
        </section>
        <section className="Section2">
            <div>
                <h1>Hidup Sehat Dengan Gizi Seimbang</h1>
                <p> 
                    Program diet ini hadir untuk membantu setiap orang
                    untuk menjaga kesehatan mereka berdasarkan 
                    makanan yang mereka konsumsi
                </p>
            </div>
            <div>
                <img src={section2} alt="Hidup Sehat Dengan Gizi Seimbang" className="FotoSection1" />
            </div>
        </section>
        <section className="Section3">
            <div>
                <h1>Track Your Calories</h1>
                <p> 
                    Mengetahui jumlah kalori makanan yang dikonsumsi dan merupakan hal 
                    yang penting bagi kebutuhan tubuh loh! Yuk hitung kalori 
                    harianmu.
                </p>
                <Link to='/Tracking' ><span>Track Now</span></Link>
            </div>
            <div>
                <img src={section3} alt="" className="FotoSection3" />
            </div>
        </section>
        <section className="Section4">
            <div>
                <h1>Layanan Kami</h1>
                <p> 
                    Program Diet hadir menjadi solusi untuk anda
                </p>
            </div>
            <div className="Fitur">
                <div className="FiturSection">
                    <img src={Fitur1} alt="" className="FotoFitur" />
                    <p>Tracking Calories</p>
                </div>
                <div className="FiturSection">
                    <img src={Fitur2} alt="" className="FotoFitur" />
                    <p>Food Recomendation</p>
                </div>
                <div className="FiturSection">
                    <img src={Fitur3} alt="" className="FotoFitur" />
                    <p>Carbon Offset</p>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}
export default HomePage