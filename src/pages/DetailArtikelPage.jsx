import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
//import reactLogo from '../assets/react.svg'
import tes from '../assets/picture 1.jpg'
import './DetailArtikelPage.css'
function DetailArtikelPage(){
const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return(
        <>
            <Navbar/>
            <div className="ContainerDetail">
                <h1>Pola Hidup Sehat Dengan Menerapkan Pedoman Gizi Seimbang.</h1>
                <p className="ArtikelDate">{date}</p>
                <img src={tes} alt="" className="ImgDetailArtikel"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolorem nisi voluptatem possimus! Recusandae quam, sunt suscipit consequatur omnis voluptates commodi, ipsa earum maxime minus quidem neque, eum rerum voluptatibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolorem nisi voluptatem possimus! Recusandae quam, sunt suscipit consequatur omnis voluptates commodi, ipsa earum maxime minus quidem neque, eum rerum voluptatibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolorem nisi voluptatem possimus! Recusandae quam, sunt suscipit consequatur omnis voluptates commodi, ipsa earum maxime minus quidem neque, eum rerum voluptatibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolorem nisi voluptatem possimus! Recusandae quam, sunt suscipit consequatur omnis voluptates commodi, ipsa earum maxime minus quidem neque, eum rerum voluptatibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolorem nisi voluptatem possimus! Recusandae quam, sunt suscipit consequatur omnis voluptates commodi, ipsa earum maxime minus quidem neque, eum rerum voluptatibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolorem nisi voluptatem possimus! Recusandae quam, sunt suscipit consequatur omnis voluptates commodi, ipsa earum maxime minus quidem neque, eum rerum voluptatibus.</p>
            </div>
            <Footer/>
        </>
    )
}
export default DetailArtikelPage