import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import BackIcon from "../assets/arrow-back-outline.svg"
import './FoodDataPage.css'
import { Link, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getFood, postFood } from "../redux/foodSlice"

function FoodDataPage (){
    const dispatch = useDispatch();
    const food = useSelector((state) => state.food)
    useEffect(() => {
        dispatch(getFood());
    },[])
    const [input,setinput] = useState('')
    const inputhandler = (e) => {
        const lowercase = e.target.value.toLowerCase();
        setinput(lowercase)
    }
    const filterData = food.food.allFood?.filter((el)=>{
        if (input === ''){
            return el
        } else { 
            return el.nama?.toLowerCase().includes(input)
        }
    })
    const klikadd = () => {
        console.log(id)
        dispatch(postFood(id))
    }
    // console.log(filterData)
/* let sum = food.food.allFood?.reduce(function(prev, current) {
    return prev + +current.karbon
  }, 0);
console.log(sum) */

    return(
        <>
        <Navbar/>
            <div className="ContainerFoodData">
                <Link to='/Tracking'><img src={BackIcon} alt="back" className="BackIcon" /></Link>
                <h2>Tambahkan Makanan</h2>
                <div className="FoodSearch">
                    <input type="text" placeholder="Search Food" onChange={inputhandler} />
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
                            
                        {filterData?.map((food) => (
                            <tr key={food.id}>
                                <td className="NameTd">{food.nama}</td>
                                <td className="CarbTd">{food.karbohidrat} g</td>
                                <td className="ProteinTd">{food.protein} g</td>
                                <td className="FatTd">{food.lemak} g</td>
                                <td className="CarbonTd">{food.karbon} g</td>
                                <td className="CalTd">{food.kalori} kkal</td>
                                <td className="AddTd"><input type="button" className="btn-add" value="Add" onClick={()=>{dispatch(postFood(food.id))}}/></td>
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