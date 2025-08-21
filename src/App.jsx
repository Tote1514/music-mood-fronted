import { useState } from 'react'
import { Routes , Route } from "react-router-dom";

import Login from './pages/login'
import Chat from './pages/Chat'
import Cadastro from './pages/Cadastro';


function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </>
  )
}

export default App
