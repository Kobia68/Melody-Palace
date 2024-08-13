import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { SignIn } from './components/Sign/SignIn'
import { Signup } from './components/Sign/Signup'
import { Home } from './components/Home/Home'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <SignIn/> */}
    {/* <Signup /> */}
    <Home />
    {/* <Navbar /> */}
    </>
  )
}

export default App
