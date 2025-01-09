import React from 'react';

const AdminFooter = () => {
    return (
        <div className="bg-dark text-white text-center py-3">
            <small>&copy; {new Date().getFullYear()} E-Commerce Admin Panel</small>
        </div>
    );
};

export default AdminFooter;
