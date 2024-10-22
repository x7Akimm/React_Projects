
import { useState } from "react"

const  Counter= (e) =>
{
    const [count,setCount] = useState(0)
    const UpdateCounter = () =>
            {
             setCount(count+1)
            }
            if(count>=10)
            {
                e.target.style.display='none'
            }
    return(
        <>
        <button onClick={(e) => UpdateCounter()}>
            Counter: {count}
        </button>

        
        
        </>
    )
}
export default Counter