// import logo from './logo.svg';
// import './App.css';
import Home from './pages/Home';
import Information from './pages/Information';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
