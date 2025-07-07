import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { NavBar } from './components/NavBar';
import Cart from './pages/Cart';

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App;
