import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarChart from './Component/BarChart/BarChart'
import Piechart from './Component/Piechart/Piechart'

function App() {

  return (
    <div className="App">
    
      <CarChart></CarChart>
      <Piechart></Piechart>
    </div>
  )
}

export default App
