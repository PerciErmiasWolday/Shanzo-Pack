import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Buckets from './pages/Buckets';
import ChickenBox from './pages/ChickenBox';
import BurgerBox from './pages/BurgerBox';
import ColdDrink from './pages/ColdDrink';
import Fries from './pages/Fries';
import PlasticStraws from './pages/PlasticStraws';
import PaperStraws from './pages/PaperStraws';
import PlasticBags from './pages/PlasticBags';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductTypeCatalog from './pages/ProductTypeCatalog';
import ProductDetail from './pages/ProductDetail';
import Resources from './pages/Resources';
import Quote from './pages/Quote';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/catalog/:type" element={<ProductTypeCatalog />} />
        <Route path="/products/buckets" element={<Buckets />} />
        <Route path="/products/chicken-box" element={<ChickenBox />} />
        <Route path="/products/burger-box" element={<BurgerBox />} />
        <Route path="/products/cold-drink" element={<ColdDrink />} />
        <Route path="/products/fries" element={<Fries />} />
        <Route path="/products/plastic-straws" element={<PlasticStraws />} />
        <Route path="/products/paper-straws" element={<PaperStraws />} />
        <Route path="/products/plastic-bags" element={<PlasticBags />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;
