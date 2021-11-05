import About from './components/About';
import Navbar from './components/Navbar';
import "halfmoon/css/halfmoon-variables.min.css";

function App() {
  return (
    <div className="page-wrapper with-navbar App">
      <Navbar />
      <About />
    </div>
  );
}

export default App;
