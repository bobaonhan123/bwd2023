import { Routes, Route } from 'react-router-dom'; 

import Header from './Assets/Components/Header';
import Footer from './Assets/Components/Footer';
import MainPage from './Assets/Components/Pages/MainPage';
import AboutUs from './Assets/Components/Pages/AboutUs';
import Prevention from './Assets/Components/Pages/Prevention';
import News from './Assets/Components/Pages/News';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/News' element={<News />} />
        <Route path='/Prevention' element={<Prevention />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
