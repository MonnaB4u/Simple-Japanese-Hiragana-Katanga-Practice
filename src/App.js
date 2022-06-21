import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import AllHiragana from './Component/AllHiragana/AllHiragana';
import PracHira from './Component/PracHira/PracHira';
import Katagana from './Component/Katagana/Katagana';
import PracKatagana from './Component/PracKatagana/PracKatagana';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/allHira" element={<AllHiragana></AllHiragana>} />
          <Route path="/pracHira" element={<PracHira></PracHira>} />
          <Route path="/allKata" element={<Katagana></Katagana>} />
          <Route path="/pracKata" element={<PracKatagana></PracKatagana>} />

        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
