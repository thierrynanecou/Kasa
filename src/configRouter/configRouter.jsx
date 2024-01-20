import React from 'react' ;
import Error from '../pages/error/error.jsx';
import About from '../pages/about/about.jsx';
import Accueil from '../pages/accueil/accueil.jsx';
import Logement from '../pages/logement/logement.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';



const ConfigRouter = () => (
    <Router>
        <Header />
        <Routes>
            <Route path ="*" element={<Error />} />
            <Route path ="/" element={<Accueil />} />
            <Route path ="/about" element={<About />} />
            <Route path ="/logement/:id" element={<Logement />} />
            
        </Routes>
        <Footer />
    </Router>
);

export default ConfigRouter 