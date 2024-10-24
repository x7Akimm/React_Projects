
import { useState } from "react"
function Counter()
{
    const[count,setCount] =useState(0)
    const Decrement = () => {
        if(count > 0)
        {
            setCount(count-1)
        }
    }
    const Reset= () => {
        setCount(0)
    }
    const Increment = () => {
        setCount(count+1)
    }
    return(
        
        <div className="Counter_main_Holder">

            <h1>{count}</h1>
            <br />
            <div className="Counter_Buttons_Holder">
            <button disabled={count==0} className="Counter_Button" onClick={()=>Decrement()}>-</button>
            <button disabled={count==0} className="Counter_Button" onClick={() => Reset()} >Reset</button>
            <button className="Counter_Button" onClick={() => Increment()}>+</button>

            </div>
           
        </div>
    )
}
export default Counter