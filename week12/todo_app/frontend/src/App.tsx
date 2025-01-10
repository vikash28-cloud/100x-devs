import Navbar from "./components/Navbar"
import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Todos from "./components/Todos";
import Create_Todo from "./components/Create_Todo";
function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/todos" element={<Todos/>}/>
      <Route path="/createTodo" element={<Create_Todo/>}/>
    </Routes>
    </Router>

    </>
  )
}

export default App
