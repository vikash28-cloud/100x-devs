import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import("./components/Landing"))
const App = () => {
  return (

    <BrowserRouter>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>

    </BrowserRouter>
  )
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <>
      <h1>this is navbar</h1>
      <div>
        <button onClick={() => {
          navigate("/dashboard")
        }}>dashboard</button>

        <button onClick={() => {
          navigate("/")
        }}>landing</button>
      </div>
    </>
  )
}

export default App