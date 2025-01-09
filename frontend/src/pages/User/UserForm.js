import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Importa useParams
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';

const UserForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({ id: 0, name: '', email: '', password: '' });
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            if (id && id !== '0') {
                try {
                    const response = await axios.get(`http://localhost:8080/api/users/${id}`);
                    setUser(response.data);
                } catch (error) {
                    console.error('Error fetching user:', error);
                    setMessage('Error fetching user data!');
                }
            }
        };
        fetchUser();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSave = async () => {
        try {
            const apiUrl = 'http://localhost:8080/api/users';
            let response;

            if (!user.id || user.id === 0) {
                response = await axios.post(apiUrl, user);
                setMessage('User created successfully!');
            } else {
                response = await axios.post(apiUrl, user);
                setMessage('User updated successfully!');
            }

            setUser(response.data);
            setTimeout(() => {
                navigate('/admin/UserList');
            }, 2000);
        } catch (error) {
            console.error('Error saving user:', error);
            setMessage('Error saving user!');
        }
    };

    const handleCancel = () => {
        navigate('/admin/UserList');
    };

    return (
        <div className="container">
            <div className="card mt-3" style={{ boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.1)' }}>
                <div className="card-header py-2">
                    <Header title="User Form" />
                </div>
                <div className="card-body p-3">
                    {message && <div className="alert alert-info">{message}</div>}
                    <div className="form-group mb-2">
                        <label className="form-label small">ID</label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            name="id"
                            value={user.id}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label small">Name</label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label small">Email</label>
                        <input
                            type="email"
                            className="form-control form-control-sm"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label small">Password</label>
                        <input
                            type="password"
                            className="form-control form-control-sm"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="card-footer py-2 d-flex justify-content-between">
                    <button
                        className="btn btn-sm btn-secondary"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
