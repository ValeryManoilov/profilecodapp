import './App.css'
import HelloPage from './components/HelloPage'
import { Routes, BrowserRouter, Route } from "react-router-dom"
import ProfilePage from './components/ProfilePage'
import { observer } from "mobx-react"
import AdminPanel from './components/AdminPanel'
import StadyAppPage from './components/StadyAppPage'

const App = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/rejectapp" element={<StadyAppPage stady="reject"/>}/>
        <Route path="/waitapp" element={<StadyAppPage stady="wait"/>}/>
      </Routes>
    </BrowserRouter>
  )
})

export default App
