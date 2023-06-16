import DeleteIcon from "../assets/close-circle.svg"
function TrackFood (){
    return (
        <>
        <tr>
            <td className="TrackNameTd">Tempe</td>
            <td className="TrackCarbTd">100 kkal</td>
            <td className="TrackProteinTd">100 kkal</td>
            <td className="TrackFatTd">100 kkal</td>
            <td className="TrackCarbonTd">100 kkal</td>
            <td className="TrackCalTd">100 kkal</td>
            <td className="TrackActionTd"><img src={DeleteIcon} alt="" /></td>
        </tr>
        </>
    )
}
export default TrackFood