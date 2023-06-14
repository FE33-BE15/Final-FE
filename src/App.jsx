import Login from "./components/Login/Login"
import Register from "./components/Register/Register";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Register' element={<Register />} /> 
      </Routes>
    </>
  )
}

export default App;
