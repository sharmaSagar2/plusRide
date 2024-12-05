import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import UserSignup from "./pages/UserSignup"
import UserLogin from "./pages/UserLogin"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSingup from "./pages/CaptainSingup"
import Start from "./pages/Start"
import UserProtectedWrapper from "./pages/UserProtectedWrapper"
import UserLogout from "./pages/UserLogout"
import CaptainHome from "./pages/CaptainHome"
import CaptainProtectWrapper from "./pages/CaptainProtectedWrapper"
import CaptainLogout from "./pages/CaptainLogout"
import Riding from "./pages/Riding"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Start/>} />
      <Route path='/riding' element={<Riding/>} />
      <Route path="/signup" element={<UserSignup/>} />
      <Route path="/login" element={<UserLogin/>} />
      <Route path="/captain-login" element={<CaptainLogin/>} />
      <Route path="/captain-signup" element={<CaptainSingup/>} />
      <Route path="/home" element={
        <UserProtectedWrapper>
          <Home/>
        </UserProtectedWrapper>
      } />
      <Route path='/logout' element={
        <UserProtectedWrapper>
          <UserLogout/>
          </UserProtectedWrapper>
      } />
      <Route path='/captain-home' element={
        <CaptainProtectWrapper>
          <CaptainHome />
        </CaptainProtectWrapper>
       
        } />
        <Route path='/captain-logout' element={
        <CaptainProtectWrapper>
          <CaptainLogout/>
          </CaptainProtectWrapper>
      } />
    </Routes>
     
    </>
  )
}

export default App
