import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Programs from './components/pages/Programs';
import Features from './components/pages/Features';
import Contact from './components/pages/Contact';
import Engineering from './components/pages/Engineering';
import Business from './components/pages/Business';
import Medicine from './components/pages/Medicine';
import Law from './components/pages/Law';
import Socialscience from './components/pages/Socialscience';
import Science from './components/pages/Science';
import Education from './components/pages/Education';
import Architecture from './components/pages/Architecture';
import Arts from './components/pages/Arts';
import Mathematics from './components/pages/Mathematics';
import Sports from './components/pages/Sports';
import Computerscience from './components/pages/Computerscience';
import Search from './components/pages/Search';
import Signin from './components/pages/Signup';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import SingleProgram from './components/pages/SingleProgram';
import ScrollToTop from './utils/ScrollToTop';



function App() {
{/*const[selected , setSelected] = useState("Choose One")*/}
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs  />} />
          <Route exact path="/programs/:id" element={<SingleProgram />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signin" element={<Signin />} />

          <Route path="/engineering" element={<Engineering />} />
          <Route path="/business" element={<Business />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/law" element={<Law />} />
          <Route path="/socialscience" element={<Socialscience />} />
          <Route path="/science" element={<Science />} />
          <Route path="/education" element={<Education />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/mathematics" element={<Mathematics />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/computerscience" element={<Computerscience />} />
        </Routes>

        <Footer />
        
      </Router> 
  
    </div>
  );
}

export default App;
