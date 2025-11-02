import { Routes , Route } from "react-router-dom";

import Login from './pages/login'
import Chat from './pages/Chat'
import { UserProvider } from "./contex/UserContext";


function App() {

  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </UserProvider>
    </>
  )
}

export default App
