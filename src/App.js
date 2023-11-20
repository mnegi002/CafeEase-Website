import {BrowserRouter as Router , Routes , Route , Navigate} from 'react-router-dom';
import Home from './home/Home';
import Contact from './contact/Contact';
import Menu from './menu/Menu';
import Navbar from './home/Navbar';
import Footer from './home/Footer';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element = {<Home/>}/>
          <Route path="menu" element = {<Menu/>}/>
          <Route path="contact" element = {<Contact/>}/>
          <Route path="*" element={<Navigate to = "/" />}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
