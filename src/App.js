import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="pt-20">
            <About />
            <Experience />
      </div>~
    </div>
  );
}

export default App;
