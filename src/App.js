import './App.css';
import Habilities from './components/Habilities';
import Index from './components/Index';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Text from './components/Text'

function aboutArea(Textsobre) {
  return <Index text={Textsobre.aboutText} />;
}

function App() {
  return (
    <div className="App">
        <Navbar />
        {Text.map(aboutArea)}
    <Habilities />
    <Projects />
    </div>
  );
}

export default App;
