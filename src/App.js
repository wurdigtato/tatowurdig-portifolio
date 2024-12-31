
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

import Container from './components/layout/Countainer';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Works from './components/pages/Works'

function App() {
  return (
    <AnimatePresence mode='wait'>
      <Router>
        <Container customClass='min-height'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/works' element={<Works/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </Container>
          <Navbar />
      </Router>
    </AnimatePresence>
  );
}

export default App;
