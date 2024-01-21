import "./App.css";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import MainAbout from "./pages/about/mainAbout/MainAbout";
import MainProperty from "./pages/properties/mainProperty/MainProperty";
import SmNav from "./components/smnav/SmNav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainContact from "./pages/contact/maincontact/MainContact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SmNav />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<MainAbout />} />
          <Route path="/property" element={<MainProperty />} />
          <Route path="/contact" element={<MainContact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
