import React from 'react'
import Cloud from './Components/cloud/Cloud';
import Data from './Components/data/Data';
import Footer from './Components/footer/Footer';
import Hero from './Components/hero/Hero';
import Navbar from './Components/navbar/Navbar';




function App() {
  return (
    <>
    {/* <Routes>
      <Route path='/' element={<App />} />
      <Route path='/recovery' element={<RecoveryPages />} />
      <Route path='/cloud' element={<CloudPages />} />
      <Route path='/contact' element={<ContactPages />} />
    </Routes> */}
       <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Footer />
    </>
  );
}

export default App;