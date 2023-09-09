import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Calorie from './Calorie'
import Diet from './Diet'
import Home from './Home'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/calories" element={<Calorie/>}/>
        <Route path="/diet" element={<Diet/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
