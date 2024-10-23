function UserGreeting(props)
{
    return (props.IsLogged ?    <h2>Welcome {props.Username}</h2> : <h2>Please Login</h2>  )
   
}
export default UserGreeting