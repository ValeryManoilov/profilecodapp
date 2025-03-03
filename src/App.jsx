import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import HelloPage from './components/HelloPage'
import { Routes, BrowserRouter, Route } from "react-router-dom"
import ProfilePage from './components/ProfilePage'
import { observer } from "mobx-react"
import AdminPanel from './components/AdminPanel'

const App = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloPage />} />
        {/* <Route path="/profile" element={<Main />} /> */}
        {/* <Route path="/adminpanel" element={<AdminPanel />} /> */}
      </Routes>
    </BrowserRouter>
  )
})

export default App
