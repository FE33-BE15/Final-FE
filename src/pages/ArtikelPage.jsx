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
    console.log()
    return(
        <>
        <Navbar/>
        <div className='ContainerArtikel'>
            <div className='ArtikelHeading'>
                <ArtikelHeading 
                title ={artikel.artikel.allArticle?.[0].judul}
                img ={artikel.artikel.allArticle?.[0].image}
                tanggal ={artikel.artikel.allArticle?.[0].tanggal}/>
            </div>
            <hr />
            <div className='ArtikelCard'>
                {artikel.artikel.allArticle?.map((artikel) => (
                    <ArtikelCard id={artikel.id} title={artikel.judul} tanggal={artikel.tanggal} konten={artikel.konten} image={artikel.image}/>
                ))}
                
            </div>
        </div>
        <Footer/>
        </>
    )
    
}
export default ArtikelPage