import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import PanelAdmin from '../pages/PanelAdmin';
import Form from '../components/Form';


const AppRoutes = () => (
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/panelAdmin' element={<PanelAdmin/>}/>
        <Route path='/form' element={<Form/>}/>       
    </Routes>
);
export default AppRoutes;