import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {gsap} from 'gsap'

function App() {
  useEffect(() => {
    gsap.fromTo('h1', { opacity: 0, rotateX:-70 }, { opacity: 1,rotateX:0, duration: 1, stagger: 1 })
  }, [])
  useEffect(() => {
    gsap.fromTo('a', { opacity: 0, scale:0 }, { opacity: 1,scale:1, duration: 1, delay: 3 })
  }, [])
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>HAPPY</h1>
     <h1>BIRTHDAY</h1>
     <h1>Abhijeet Manoj</h1>
      <a href="https://youtu.be/xvFZjo5PgG0">Click here for your birthday gift</a>
    </>
  )
}

export default App
