import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import ContainerForm from '../components/ContainerForm';
import ContainerBackoffice from '../components/Backoffice/ContainerBackoffice';
import ContentDashboard from '../components/Backoffice/ContentDashboard';
import Login from '../pages/Login';


const AppRoutes = () => (
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/panelAdmin' element={<ContainerBackoffice/>}/>
        <Route path='/form' element={<ContainerForm/>}/>       
        <Route path='/panelAdmin/transacciones' element={<ContentDashboard/>}/>  
        <Route path='/panelAdmin/cotizaciones' element={<ContentDashboard/>}/>  
        <Route path='/login' element={<Login/>}/>  
    </Routes>
);
export default AppRoutes;