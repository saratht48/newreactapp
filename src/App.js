import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
function App() {
  return (
    <Router> 
     <div>
     <Header/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    </Routes>
    </div>
    </Router>
 
  );
}

export default App;
