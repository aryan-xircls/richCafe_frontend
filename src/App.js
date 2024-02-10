
import './assets/bottstrap_extended.scss';
import './assets/custom.scss';
import './components/components.scss';
import Navbar from './utilities/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="" style={{paddingBottom:"500px"}}>
      <Navbar/>
      <Home />
    </div>
  );
}

export default App;
