import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import UserSignup from "./pages/UserSignup"
import UserLogin from "./pages/UserLogin"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSingup from "./pages/CaptainSingup"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<UserSignup/>} />
      <Route path="/login" element={<UserLogin/>} />
      <Route path="/captain-login" element={<CaptainLogin/>} />
      <Route path="/captain-signup" element={<CaptainSingup/>} />
    </Routes>
     
    </>
  )
}

export default App
