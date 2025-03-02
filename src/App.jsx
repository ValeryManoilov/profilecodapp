import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloPage from './components/HelloPage'
import { Routes, BrowserRouter, Route } from "react-router-dom"
import ProfilePage from './components/ProfilePage'
import { observer } from "mobx-react"

const App = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
})

export default App
