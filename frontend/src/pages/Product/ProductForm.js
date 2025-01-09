import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';

const ProductForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        id: 0,
        name: '',
        price: 0.0,
        description: '',
        stockQuantity: 0,
        category: { id: '' },
        images: [],
    });
    const [categories, setCategories] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchProductAndCategories = async () => {
            if (id && id !== '0') {
                try {
                    const response = await axios.get(`http://localhost:8080/api/products/${id}`);
                    setProduct(response.data);
                } catch (error) {
                    console.error('Error fetching product:', error);
                    setMessage('Error fetching product data!');
                }
            }

            try {
                const categoryResponse = await axios.get('http://localhost:8080/api/categories/allcategories');
                setCategories(categoryResponse.data || []);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchProductAndCategories();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        //if (name === 'category.id') {
        setProduct({ ...product, [name]: value });
    };

    const handleSave = async () => {
        try {
            const apiUrl = `http://localhost:8080/api/products`;
            let response;

            if (!product.id || product.id === 0) {
                response = await axios.post(apiUrl, product);
                setMessage('Product created successfully!');
            } else {
                response = await axios.post(apiUrl, product);
                setMessage('Product updated successfully!');
            }

            setProduct(response.data);
            setTimeout(() => {
                navigate('/admin/ProductList');
            }, 2000);
        } catch (error) {
            console.error('Error saving product:', error);
            setMessage('Error saving product!');
        }
    };

    const handleCancel = () => {
        navigate('/admin/ProductList');
    };

    return (
        <div className="container">
            <div className="card mt-3" style={{ boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.1)' }}>
                <div className="card-header py-2">
                    <Header title="Product Form" />
                </div>
                <div className="card-body p-3">
                    {message && <div className="alert alert-info">{message}</div>}
                    <div className="form-group mb-2">
                        <label className="form-label small">Id</label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            name="id"
                            value={product.id}
                            readOnly
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label small">Name</label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label small">Price</label>
                        <input
                            type="number"
                            className="form-control form-control-sm"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label small">Description</label>
                        <textarea
                            className="form-control form-control-sm"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label small">Stock Quantity</label>
                        <input
                            type="number"
                            className="form-control form-control-sm"
                            name="stockQuantity"
                            value={product.stockQuantity}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label small">Category</label>
                        <select
                            className="form-select form-select-sm"
                            name="categoryId"
                            value={product.categoryId || ''}
                            onChange={handleChange}
                        >
                            <option value="">Select a Category</option>
                            {Array.isArray(categories) &&
                                categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                        </select>
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

export default ProductForm;
