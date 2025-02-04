import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin } from "./components/signin";
import { User } from "./components/User";  // Create this component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/users" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;