import "./styles/base.css";
import "./styles/animation.css";
import { Home } from 'Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Portfolio } from "Portfolio";
import { Header } from "Header";
import { Footer } from "Footer";
import { About } from "About";

function App() {
  
  return (
   <>
     <BrowserRouter basename="/react_port">
     {/* <BrowserRouter> */}
      <Header />
      <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
     </BrowserRouter>
   </>
  );
}

export default App;
