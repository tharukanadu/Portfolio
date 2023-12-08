import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Contact from './Page/Contact/Contact';
import Portfolio from './Page/Portfolio/Portfolio';
import Navbar from './Components/Navbar'
import Themes from './Components/Themes';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Themes/>
   <Routes>
    <Route index element = {<Home/>}/>
    <Route path='about' element={<About />}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='portfolio' element={<Portfolio/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
