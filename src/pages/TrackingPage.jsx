import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import TrackFood from "../component/TrackFood"
import './TrackingPage.css'
import { Link } from "react-router-dom"

function TrackingPage (){
    return(
        <>
        <Navbar/>
            <div className="ContainerTrack">
                <div className="ContainerNutrisi">
                    <div className="Calori">
                        <h2>Kalori Dibutuhkan</h2>
                        <p>100 kkal</p>
                        <h2>Kalori Terpenuhi</h2>
                        <p>100 kkal</p>
                    </div>
                    <div className="Nutrisi">
                        <div>
                            <h2>Karbohidrat</h2>
                            <p>100 kkal</p>
                        </div>
                        <div>
                            <h2>Protein</h2>
                            <p>100 kkal</p>
                        </div>
                        <div>
                            <h2>Lemak</h2>
                            <p>100 kkal</p>
                        </div>
                        <div>
                            <h2>Karbon</h2>
                            <p>100 kkal</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="FoodToday">
                    <p>Makanan Hari ini</p>
                    <div className="tabel">
                        <table className="TabelFoodToday">
                            <thead>
                                <tr>
                                    <th className="TrackFoodName">Nama</th>
                                    <th className="TrackFoodCarb">Karbohidrat</th>
                                    <th className="TrackFoodProtein">Protein</th>
                                    <th className="TrackFoodFat">Lemak</th>
                                    <th className="TrackFoodCarbon">Karbon</th>
                                    <th className="TrackFoodCalori">Calori</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrackFood/>
                                <TrackFood/>
                                <TrackFood/>
                                <TrackFood/>
                            </tbody>
                        </table>
                        <span><Link to='/Tracking/AddFood'> Add Food</Link></span>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}
export default TrackingPage