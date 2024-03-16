
import './assets/bottstrap_extended.scss';
import './assets/custom.scss';
import './components/components.scss';
import Navbar from './utilities/Navbar';
import Footer from './utilities/Footer';
import PagesRoutes from './routes';

function App() {
  return (
    <div className="" >
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
       <PagesRoutes />
      </div>

      <Footer />
    </div>
  );
}

export default App;
