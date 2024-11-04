import Navbar from "./components/Navbar"
import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import Signup from "./components/Signup";
import Login from "./components/login";
import Todos from "./components/Todos";
function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="todos" element={<Todos/>}/>
    </Routes>
    </Router>

    </>
  )
}

export default App
