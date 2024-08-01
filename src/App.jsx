// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './components/landing page/landing'

function App() {

  return (
  <Router>
      {/* <Landing /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
  </Router>
  )
}

export default App
