import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/main/MainLayout';
import GeneralPage from './pages/general/GeneralPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<GeneralPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
