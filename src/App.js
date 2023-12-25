import {BrowserRouter as Router , Routes , Route , Navigate} from 'react-router-dom';
import Home from './home/Home';
import Contact from './contact/Contact';
import Menu from './menu/Menu';
import Navbar from './home/Navbar';
import CartProvider from './cart/cartContextAPI/CartProvider';
import Signup from './screens/Signup';
import Login from './screens/Login';
// import Footer from './home/Footer';

function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element = {<Home/>}/>
          <Route path="menu" element = {<Menu/>}/>
          <Route path="contact" element = {<Contact/>}/>
          <Route path="*" element={<Navigate to = "/" />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createuser" element={<Signup/>}/>
        </Route>
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
