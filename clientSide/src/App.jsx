import './App.css'
import Home from '../Components/Home'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import {
  Route,
  Routes
} from "react-router-dom";
import Error from '../Components/Error'
// import Login from '../Components/Login'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='*' element={<Error/>} />
    {/* </Route> */}
    {/* <Route path='/about'>
      <About/>
    </Route>
    <Route path='/contact'>
      <Contact/>
    </Route>
    <Route path='/signup'>
      <Signup/>
    </Route>
    <Route path='/login'>
      <Login/>
    </Route>  */}
    </Routes>
    </>
  )
}

export default App
