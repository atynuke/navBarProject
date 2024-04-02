import NavBar from "./components/NavBar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Pages/Home/Home.jsx'
import About from './components/Pages/About/About.jsx'
import Contact from './components/Pages/Contact/Contact.jsx'
import SignUpForm from "./components/Pages/Form/Form.jsx"
import Settings from './components/Pages/Settings/Settings.jsx'
import LogOut from './components/Pages/Logout/logout.jsx'
import NotFound from "./components/Pages/NotFound/notFound.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signupform" element={<SignUpForm />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/*" element={<NotFound />} />

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}


export default App

