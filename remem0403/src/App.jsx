import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from "./Main";
import { Obituary } from './Memorial/Obituary';
import { ObiContent } from './Memorial/ObiContent';
import { ObiView } from './Memorial/ObiView';
import { Memorial } from './Memorial/Memorial';
import { MemorialView } from './Memorial/MemorialView';
import { Footer } from './CommonLayout/Footer';
import { ServiceIntro } from './ServiceIntro';
function App() {
 
  return (
    <div className="App"> 
      <BrowserRouter> 
          <Routes>  
            <Route path='/' element={<Main />} />
            <Route path='/service' element={<ServiceIntro />}/>
            <Route path='/obituray' element={<Obituary />} />
            <Route path='/obiContent' element={<ObiContent />} />
            <Route path='/obiView' element={<ObiView />}/>
            <Route path='/memorial' element={<Memorial />}/>
            <Route path='/memorialView' element={<MemorialView />}/>
          </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
