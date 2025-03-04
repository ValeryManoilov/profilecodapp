import './App.css'
import RegistrationPage from './components/RegistrationPage'
import { Routes, BrowserRouter, Route } from "react-router-dom"
import ProfilePage from './components/ProfilePage'
import { observer } from "mobx-react"
import AdminPanel from './components/AdminPanel'
import StadyAppPage from './components/StadyAppPage'
import Main from './components/MainComponents/Main'
import TestPage from './components/TestPageComponents/TestPage'

const App = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/profile" element={<Main />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/rejectapp" element={<StadyAppPage stady="Reject"/>}/>
        <Route path="/waitapp" element={<StadyAppPage stady="Wait"/>}/>
        <Route path="/test" element={<TestPage />}/>
      </Routes>
    </BrowserRouter>
  )
})

export default App
