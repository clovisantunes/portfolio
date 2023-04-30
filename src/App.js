import './App.css';
import Button from './componentes/Button';
import Footer from './componentes/Footer';
import Navbar from './componentes/Navbar';
import Contact from './pages/Contact/Contact';
import Index from './pages/Index/Index';
import Text from './pages/Index/Text';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';



function aboutArea(Textsobre) {
  return <Index text={Textsobre.aboutText} />;
}
function App() {
  return (
    <div>
      <Navbar />
      {Text.map(aboutArea)}
      <Contact />
      <Skills />
      <Projects />
      <Button  />
      <Footer />
    </div>
  );
}

export default App;
