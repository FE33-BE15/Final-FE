import reactLogo from '../assets/react.svg'
import './ArtikelHeading.css'
function ArtikelHeading () {
    return (
        <>
            <div className='Heading'>
                <img src={reactLogo} alt="" />
                <div className='HeadingTitle'>
                    <h1>Pola Hidup Sehat Dengan Menerapkan Pedoman Gizi Seimbang.</h1>
                    <p>12/12/1212</p>
                </div>
            </div>
        </>
    )
}
export default ArtikelHeading