import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Question from './components/Question'
import GameOver from './components/GameOver';

function App() {

  const [score, setScore] = useState('0')

  const handleScore = (score) =>{
    setScore(score)
  }
  

  return (
    <>
      <Router basename='/Country-game/'>
        <Routes>
          <Route path='/' element={<Question handleScore={handleScore}/>}/>
          <Route path='/Game-over' element={<GameOver score={score} setScore={setScore}/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
