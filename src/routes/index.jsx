import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import ContainerForm from '../components/ContainerForm';
import ContainerBackoffice from '../components/Backoffice/ContainerBackoffice';
import ContentDashboard from '../components/Backoffice/ContentDashboard';
import Login from '../pages/Login';
import SignUp from '../components/Login/signUp';


const AppRoutes = () => (
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/panelAdmin' element={<ContainerBackoffice/>}/>
        <Route path='/form' element={<ContainerForm/>}/>       
        <Route path='/panelAdmin/transacciones' element={<ContentDashboard/>}/>  
        <Route path='/panelAdmin/cotizaciones' element={<ContentDashboard/>}/>  
        <Route path='/login' element={<Login/>}/>  
        <Route path='/registro' element={<SignUp/>}/>  
    </Routes>
);
export default AppRoutes;