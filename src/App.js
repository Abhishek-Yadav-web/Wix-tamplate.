import './App.css';
import { About } from './components/About/About';
import Bgclip from './components/Bgclip/Bgclip';
import { Contact } from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar.js';
import Sidebar from './components/Sidebar/Sidebar';
import { Social } from './components/Social/Social';
import { Work } from './components/Work/Work';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Social />
      <Bgclip />
      <Home />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;
