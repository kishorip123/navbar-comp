
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import Education from './Component/Education';
import Home from './Component/Home';
import './Component/Nav.css';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/education' element={<Education />}/>
          <Route path='/about' element={<About />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
