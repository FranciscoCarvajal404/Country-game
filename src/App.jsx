import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Question from './components/Question'
import GameOver from './components/GameOver';

function App() {


  return (
    <>
      <Router basename='/Country-game/'>
        <Routes>
          <Route path='/' element={<Question/>}></Route>
          <Route path='/Game-over' element={<GameOver/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
