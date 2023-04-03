import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Presentation from './pages/Presentation'
import Projets from './pages/Projets'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Presentation />}></Route>
          <Route path='projets' element={<Projets />}></Route>
          <Route path='/*' element={<Presentation />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App