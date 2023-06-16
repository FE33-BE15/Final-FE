import "./ArtikelCard.css"
import { Link } from "react-router-dom"

function ArtikelCard({id, title, tanggal, konten,image}) {
    return(
        <>
            <div className="card" key={id}>
                <img src={image} alt="foto" />
                <p className="title">{title}</p>
                <Link to='/Artikel/detail' state={{
                    id : id,
                    title : title,
                    tanggal : tanggal, 
                    konten : konten,
                    image : image
                }} className="link">selengkapnya</Link> 
            </div>
        </>
    )
}
export default ArtikelCard