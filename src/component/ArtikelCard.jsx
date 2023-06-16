import "./ArtikelCard.css"
import reactLogo from '../assets/react.svg'
import { Link } from "react-router-dom"

function ArtikelCard({id, title}) {
    return(
        <>
            <div className="card" key={id}>
                <img src={reactLogo} alt="foto" />
                <p className="title">{title}</p>
                <Link to='/Artikel/detail' state={{
                    id : id,
                    title : title
                }} className="link">selengkapnya</Link> 
            </div>
        </>
    )
}
export default ArtikelCard