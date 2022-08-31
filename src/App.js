import React, { useEffect } from 'react'
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom'
import { AiOutlineUp } from 'react-icons/ai'
function App() {
  // if (window.innerHeight > 1000)
  const handleButtonToTop = () => {
    if (window.scrollY >= window.screen.height) {
      document.getElementById('btn_toTop').classList.remove('hidden')
      document.getElementById('btn_toTop').classList.add('flex')
    }
    else {
      document.getElementById('btn_toTop').classList.add('hidden')
      document.getElementById('btn_toTop').classList.remove('flex')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleButtonToTop, true)
    return window.removeEventListener('scroll', handleButtonToTop, false)
  }, [])

  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

      </Routes>
      <button id='btn_toTop' className='fixed hidden justify-center items-center w-8 lg:w-12 h-8 lg:h-12 z-50 rounded-full bottom-4 right-4 font-bold'><a href="#home" className='block'><AiOutlineUp size={25}></AiOutlineUp> </a></button>
    </div>

  );
}

export default App;
