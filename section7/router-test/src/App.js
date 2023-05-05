// import logo from './logo.svg';
// import './App.css';
import Home from './pages/Home';
import Information from './pages/Information';
import Contact from './pages/Contact';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import NotFound from './pages/NotFound';
import './App.css'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/information">Information</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/information">Information</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <a href='information'>aタグです</a>
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
