import { Routes, Route } from 'react-router-dom';

import Header from './Assets/Components/Header';
import Footer from './Assets/Components/Footer';
import MainPage from './Assets/Components/Pages/MainPage';
import AboutUs from './Assets/Components/Pages/AboutUs';
import News from './Assets/Components/Pages/News';
import Report from './Assets/Components/Pages/Report';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/News' element={<News />} />
        <Route path='/Report' element={<Report />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
