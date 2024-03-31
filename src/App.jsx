import NavBar from "./components/NavBar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Pages/Home/Home.jsx'
import About from './components/Pages/About/About.jsx'
import Contact from './components/Pages/Contact/Contact.jsx'
import SignUpForm from "./components/Pages/Form/Form.jsx"
import Settings from './components/Pages/Settings/Settings.jsx'
import LogIn from './components/Pages/LogIn/LogIn.jsx'
import LogOut from './components/Pages/Logout/logout.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar  />
        {/* <PracticeEffect></PracticeEffect> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signupform" element={<SignUpForm />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/logout" element={<LogOut />} />

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}


export default App

