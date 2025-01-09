import React from 'react';
import './AdminHeader.css'

const AdminHeader = ({ user, onLogout }) => {
    return (
        <div className="bg-primary text-white d-flex justify-content-between align-items-left px-4 py-2" >

            <div className="d-flex align-items-center">
                <img
                    src={user.avatar}
                    alt="User"
                    className="rounded-circle me-3"
                    style={{ width: '50px', height: '50px' }}
                />
                <div className='headerName'>
                    <h5 >Name: {user.name}</h5>
                    <small>Id: {user.id}</small>
                </div>
            </div>

            <button className="btn btn-danger" onClick={onLogout}>
                Logout
            </button>
        </div>
    );
};

export default AdminHeader;
