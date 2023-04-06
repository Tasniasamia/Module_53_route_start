import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home/Home'
import Chart from './Component/Chart/Chart'

function App() {

  return (
    <div className="App">
      <Home></Home>
      <Chart></Chart>
    </div>
  )
}

export default App
