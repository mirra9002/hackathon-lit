import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({children}) {
  console.log(children);
  useEffect(() => {
    document.title = 'Історичний квест';
  }, [])
  return (
   <>
    {children}
    </>
  )
}

export default App