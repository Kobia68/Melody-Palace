import { useState } from 'react'
import './App.css'
import { SignIn } from './components/Sign/SignIn'
import { Signup } from './components/Sign/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SignIn/>
    {/* <Signup /> */}
    </>
  )
}

export default App
