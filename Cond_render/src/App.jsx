import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserGreeting from './UserGreeting.jsx'

function App() {

  return (
    <>
      <UserGreeting IsLogged ={true} Username = "User1"/>
      <UserGreeting IsLogged ={false} Username = "User1"/>
    </>
  )
}

export default App
