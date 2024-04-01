import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import RealTimeDetection from './RealTimeDetection';
import UploadSection from './UploadSection';

// App, Contact, Home, About and much more
function App() {
  return (
    <Router>
      <div className="App">
          <Navbar></Navbar>
          <Routes>
            
            <Route exact path="/" element={<Home/>}>
            </Route>
            
            <Route path="/about" element={<About/>}>
            </Route>

            <Route path="/imgDetect" element={<UploadSection/>}>
            </Route>

            <Route path="/liveDetect" element={<RealTimeDetection/>}>
            </Route>

          </Routes>
      </div>
      {/* <Footer></Footer> */}
    </Router>
  );
}

export default App;