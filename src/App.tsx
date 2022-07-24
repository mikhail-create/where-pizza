import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/main/MainLayout';
import AboutPage from './pages/info/about/AboutPage';
import GeneralPage from './pages/general/GeneralPage';
import TermsPage from './pages/info/terms/TermsPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<GeneralPage />} />
                    <Route path="/info/about" element={<AboutPage />} />
                    <Route path="/info/terms" element={<TermsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
