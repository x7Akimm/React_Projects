function Button()
{
    let count =0;
    const HandleClick = (e) =>
    {
        e.target.textContent = "You Clicked me "
    }
    const HandleClick2 = (name) =>
        {
            if(count<3)
            {
              console.log(`${name} Stop Clicking the button`)
            count++  
            }
            
           
           
          
        }
    
    return(
        <button onDoubleClick={(e) => HandleClick(e)}>
           Counter : {count}
        </button>
    )
    
}
export default Button