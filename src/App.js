import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import VillaPaiting from './Components/VillaPaiting';
import OfficePaiting from './Components/OfficePaiting';
import AppartmentPainting from './Components/AppartmentPainting';
import HousePainting from './Components/HousePainting';
import CommercialPainting from './Components/CommercialPainting';
import AntifungalWallPainting from './Components/AntifungalWallPainting';
import Furniture from './Components/Furniture';
import EpoxyFloring from './Components/EpoxyFloring';
import InteriorParquetPainting from './Components/InteriorParquetPainting';
import MoveInOutPainting from './Components/MoveInOutPainting';
import WallpaperInstallation from './Components/WallpaperInstallation';
import Contact from './Components/Contact';
import ExteriorPainting from './Components/ExteriorPainting';
import ExteriorFacadePainting from './Components/ExteriorFacadePainting';
import ExteriorMetallicPainting from './Components/ExteriorMetallicPainting';
import ScrollToTop from './ScrollToTOp';

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/villa-painting' element={<VillaPaiting/>} />
          <Route path='/office-painting' element={<OfficePaiting/>} />
          <Route path='/appartment-painting' element={<AppartmentPainting/>} />
          <Route path='/house-painting' element={<HousePainting/>} />
          <Route path='/commercial-painting' element={<CommercialPainting/>} />
          <Route path='/anti-fungal-painting' element={<AntifungalWallPainting/>} />
          <Route path='/furniture-painting' element={<Furniture/>} />
          <Route path='/epoxy-floring' element={<EpoxyFloring/>} />
          <Route path='/interior-parquet-painting' element={<InteriorParquetPainting/>} />
          <Route path='/move-in/out-painting' element={<MoveInOutPainting/>} />
          <Route path='/wallpaper-installation' element={<WallpaperInstallation/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/exterior-painting' element={<ExteriorPainting/>} />
          <Route path='/exterior-facade-painting' element={<ExteriorFacadePainting/>} />
          <Route path='/exterior-metallic-fence-painting' element={<ExteriorMetallicPainting/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
