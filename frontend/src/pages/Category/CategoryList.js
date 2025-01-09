import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const apiUrl = `http://localhost:8080/api/categories?page=${currentPage}&size=10`;
                const response = await axios.get(apiUrl);
                const data = response.data;

                setCategories(data.content);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, [currentPage]);

    const handlePageChange = (page) => {
        if (page >= 0 && page < totalPages) {
            setCurrentPage(page);
        }
    };

    const newItem = () => {
        navigate('/admin/CategoryForm/0');
    };

    const editItem = (id) => {
        navigate(`/admin/CategoryForm/${id}`);
    };

    return (
        <div className="container">
            <div className="card" style={{ boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)' }}>
                <div className="card-header">
                    <h1>Category List</h1>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category.id}>
                                    <td>{category.id}</td>
                                    <td>{category.name}</td>
                                    <td>{category.description}</td>
                                    <td>
                                        <button
                                            className="btn btn-warning btn-sm"
                                            onClick={() => editItem(category.id)}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer">
                    <div className="pagination mt-3">
                        <button
                            onClick={newItem}
                            className="btn btn-sm btn-secondary me-2"
                        >
                            New Item
                        </button>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 0}
                            className="btn btn-sm btn-primary me-2"
                        >
                            Previous
                        </button>
                        <span>Page {currentPage + 1} of {totalPages}</span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage + 1 === totalPages}
                            className="btn btn-sm btn-primary ms-2"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;
