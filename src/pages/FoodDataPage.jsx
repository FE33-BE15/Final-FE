import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import BackIcon from "../assets/arrow-back-outline.svg"
import './FoodDataPage.css'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getFood } from "../redux/foodSlice"

function FoodDataPage (){
    const dispatch = useDispatch();
    const food = useSelector((state) => state.food)
    useEffect(() => {
        dispatch(getFood());
    },[])
    console.log(food)
    return(
        <>
        <Navbar/>
            <div className="ContainerFoodData">
                <Link to='/Tracking'><img src={BackIcon} alt="back" className="BackIcon" /></Link>
                <h2>Tambahkan Makanan</h2>
                <div className="FoodSearch">
                    <input type="text" placeholder="Search Food" />
                    <button>Search</button>
                </div>
                <div className="ContainerFood">
                    <table>
                        <thead>
                            <tr>
                                <th className="FoodName">Nama</th>
                                <th className="FoodCarb">Karbohidrat</th>
                                <th className="FoodProtein">Protein</th>
                                <th className="FoodFat">Lemak</th>
                                <th className="FoodCarbon">Karbon</th>
                                <th className="FoodCalori">Calori</th>
                            </tr>
                        </thead>
                        <tbody>
                        {food.food.map((food) => (
                            <tr key={food.id}>
                                <td className="NameTd">{food.name}</td>
                                <td className="CarbTd">{food.Karbohidrat} kkal</td>
                                <td className="ProteinTd">{food.Protein} kkal</td>
                                <td className="FatTd">{food.Lemak} kkal</td>
                                <td className="CarbonTd">{food.Karbon} kkal</td>
                                <td className="CalTd">{food.Kalori} kkal</td>
                                <td className="AddTd"><button>Add</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        <Footer/>
        </>
    )
}
export default FoodDataPage