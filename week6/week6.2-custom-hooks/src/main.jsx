import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ClassComponent from "./ClassComponent.jsx"
import MyComponent from "./MyComponent.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <ClassComponent/> */}
    {/* <MyComponent/> */}
  </React.StrictMode>,
)
