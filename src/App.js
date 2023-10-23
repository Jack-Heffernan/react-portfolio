import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import NavigateExample from './pages/NavigateExample'

//components
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/nav-example" element={<NavigateExample />}/>

        <Route path="#" element={<PageNotFound />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;