import reactLogo from '../assets/react.svg'
import './ArtikelHeading.css'
function ArtikelHeading ({title,img,tanggal}) {
    return (
        <>
            <div className='Heading'>
                <img src={img} alt="" />
                <div className='HeadingTitle'>
                    <h1>{title}</h1>
                    <p>{tanggal}</p>
                </div>
            </div>
        </>
    )
}
export default ArtikelHeading