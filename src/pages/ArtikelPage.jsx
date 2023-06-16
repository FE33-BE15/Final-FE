import './ArtikelPage.css'
import ArtikelCard from '../component/ArtikelCard'
import ArtikelHeading from '../component/ArtikelHeading'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getArtikel } from '../redux/artikelSlice'


function ArtikelPage() {
    const dispatch = useDispatch();
    const artikel = useSelector((state) => state.artikel)
    useEffect(() => {
        dispatch(getArtikel());
    },[]);
    console.log(artikel)
    return(
        <>
        <Navbar/>
        <div className='ContainerArtikel'>
            <div className='ArtikelHeading'>
                <ArtikelHeading/>
            </div>
            <hr />
            <div className='ArtikelCard'>
                {artikel.artikel.map((artikel) => (
                    <ArtikelCard id={artikel.id} title={artikel.title}/>
                ))}
                
            </div>
        </div>
        <Footer/>
        </>
    )
    
}
export default ArtikelPage