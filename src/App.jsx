import { useEffect, useState } from 'react'
import './App.css'
import Question from './components/Question'

const url = 'https://restcountries.com/v3.1/all'

function App() {

  const [paises, setPaises] = useState()

  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>setPaises(data))
  },[])

  return (
    <>
      <Question paises={paises}/>
    </>
  )
}

export default App
