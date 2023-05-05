import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from './components/Navbar';
import SignIn from './pages/SignIn';
import Pricing from './pages/Pricing';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
    <NavbarComponent />
    
    <Routes>
      
        <Route path="/winsurtech" element={<HomePage />}> </Route>
        <Route path="/signin" element={<SignIn />}> </Route>
        <Route path="/contactus" element={<ContactUs />}> </Route>


        <Route path="/signup" element={<SignUp />}> </Route>
        <Route path="/pricing" element={<Pricing />}> </Route>


      </Routes>
      <Footer />

    </BrowserRouter>

  
  );
}

export default App;
