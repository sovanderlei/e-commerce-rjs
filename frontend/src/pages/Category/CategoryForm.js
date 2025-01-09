import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Importa useParams
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';

const CategoryForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [category, setCategory] = useState({
        id: 0,
        name: '',
        description: '',
        isActive: true,
        imageUrl: '',
        createdBy: '',
        updatedBy: '',
    });
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchCategory = async () => {
            if (id && id !== '0') {
                try {
                    const response = await axios.get(`http://localhost:8080/api/categories/${id}`);
                    setCategory(response.data);
                } catch (error) {
                    console.error('Error fetching category:', error);
                    setMessage('Error fetching category data!');
                }
            }
        };
        fetchCategory();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCategory({
            ...category,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSave = async () => {
        try {
            const apiUrl = 'http://localhost:8080/api/categories';
            let response;

            if (!category.id || category.id === 0) {
                response = await axios.post(apiUrl, category);
                setMessage('Category created successfully!');
            } else {
                response = await axios.post(apiUrl, category);
                setMessage('Category updated successfully!');
            }

            setCategory(response.data);
            setTimeout(() => {
                navigate('/admin/CategoryList');
            }, 2000);
        } catch (error) {
            console.error('Error saving category:', error);
            setMessage('Error saving category!');
        }
    };

    const handleCancel = () => {
        navigate('/admin/CategoryList');
    };

    return (
        <div className="container">
            <div className="card mt-3" style={{ boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.1)' }}>
                <div className="card-header py-2">
                    <Header title="Category Form" />
                </div>
                <div className="card-body p-3">
                    {message && <div className="alert alert-info">{message}</div>}
                    <div className="form-group mb-2">
                        <label className="form-label small">ID</label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            name="id"
                            value={category.id}
                            readOnly
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label small">Name</label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            name="name"
                            value={category.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label small">Description</label>
                        <textarea
                            className="form-control form-control-sm"
                            name="description"
                            value={category.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label small">Active</label>
                        <input
                            type="checkbox"
                            className="form-check-input ms-2"
                            name="isActive"
                            checked={category.isActive}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label small">Image URL</label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            name="imageUrl"
                            value={category.imageUrl}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label small">Created By</label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            name="createdBy"
                            value={category.createdBy}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label small">Updated By</label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            name="updatedBy"
                            value={category.updatedBy}
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

export default CategoryForm;
