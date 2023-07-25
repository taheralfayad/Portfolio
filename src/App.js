import './App.css';
import Navbar from './components/Navbar'
import Greeting from './components/Greeting'
import About from './components/About'
import Experience from './components/Experience'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="pt-14">
            <Greeting/>
            <About/>
            <Experience/>
      </div>
    </div>
  );
}

export default App;
