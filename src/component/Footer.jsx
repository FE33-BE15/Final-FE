import './Footer.css'
import Logo from '../assets/logo.png'
import danone from '../assets/DANONE_LOGO.png'
import skillvul from '../assets/skillvul.png'
function Footer() {
    return(
        <>
            <footer className='Footer'>
                <div>
                    <img src={Logo} alt="" className='LogoFooter' />
                </div>
                <div>
                    <h3>About Us</h3>
                    <p>Platform yang menyediakan layanan artikel, rekomendasi makanan dan tracking diet untuk menunjang kesehatan</p>
                </div>
                <div>
                    <h3>Challange Partner</h3>
                    <img src={danone} alt="" className='LogoPartner'/>
                    <img src={skillvul} alt="" className='LogoPartner'/>
                </div>
            </footer>
        </>
    )
}
export default Footer