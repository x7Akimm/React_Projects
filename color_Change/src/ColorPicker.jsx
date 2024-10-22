
import { useState } from "react"

function ColorPicker()
{
    const [Color,setColor] = useState("#FFFFFF")
    const HandleColorChange = (event) =>
    {
        setColor(event.target.value)
    }
    return(
        <div className="color-picker-container">

            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: Color}}>
                    <p>Selecter Color {Color}</p>
            </div>
            <label htmlFor="">Select a Color:</label>
            <input type="color" onChange={HandleColorChange} />

        </div>
    )
}
export default ColorPicker