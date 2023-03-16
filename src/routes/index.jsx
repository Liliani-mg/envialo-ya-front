import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import PanelAdmin from '../pages/PanelAdmin';
import ContainerForm from '../components/ContainerForm';
import ContainerBackoffice from '../components/Backoffice/ContainerBackoffice';
import DashboardTransactions from '../components/Backoffice/DashboardTransactions';
import DashoardCotiz from '../components/Backoffice/DashoardCotiz';
import ContentDashboard from '../components/Backoffice/ContentDashboard';


const AppRoutes = () => (
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/panelAdmin' element={<ContainerBackoffice/>}/>
        <Route path='/form' element={<ContainerForm/>}/>       
        <Route path='/panelAdmin/transacciones' element={<ContentDashboard/>}/>  
        <Route path='/panelAdmin/cotizaciones' element={<ContentDashboard/>}/>  

    </Routes>
);
export default AppRoutes;