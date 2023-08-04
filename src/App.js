import './App.css';
import Navbar from './components/Navbar'
import Greeting from './components/Greeting'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="py-20">
            <div className="py-10">
            <Greeting/>
            </div>
            <About/>
            <Experience/>
            <Projects/>
      </div>
    </div>
  );
}

export default App;
