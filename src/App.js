import { Routes, Route } from 'react-router-dom'; 

import Header from './Assets/Component/Header';
import Footer from './Assets/Component/Footer';
import MainPage from './Assets/Component/MainPage';
import AboutUs from './Assets/Component/AboutUs';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
