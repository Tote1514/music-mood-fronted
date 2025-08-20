import { useState } from 'react'
import { Routes , Route } from "react-router-dom";

import Login from './pages/login'
import Chat from './pages/Chat'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  )
}

export default App
