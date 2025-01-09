import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const AdminContent = () => {
    return (
        <div className="p-4">
            <Routes>
                <Route path="/admin/dashboard" element={<Dashboard />} />

            </Routes>
        </div>
    );
};

export default AdminContent;
