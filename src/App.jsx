import './App.css'
import HelloPage from './components/HelloPage'
import { Routes, BrowserRouter, Route } from "react-router-dom"
import ProfilePage from './components/ProfilePage'
import { observer } from "mobx-react"
import AdminPanel from './components/AdminPanel'
import StadyAppPage from './components/StadyAppPage'
import Main from './components/MainComponents/Main'

const App = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/rejectapp" element={<StadyAppPage stady="Reject"/>}/>
        <Route path="/waitapp" element={<StadyAppPage stady="Wait"/>}/>
      </Routes>
    </BrowserRouter>
  )
})

export default App
