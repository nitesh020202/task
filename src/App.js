import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Dataform from './components/Dataform'; // Import your Dataform component

import EditClient from './components/EditClient'; 
import ClientDetail from './components/ClientDetail'; 
import Nav from './components/Nav'; 
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Nav/>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dataform" element={<Dataform />} />
                <Route path="/client/:clientId" element={<ClientDetail />} />
/               <Route path="/edit/:clientId" element={<EditClient />} />
                {/* Other routes */}
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
