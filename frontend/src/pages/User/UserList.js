import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const apiUrl = `http://localhost:8080/api/users?page=${currentPage}&size=10`;
                const response = await axios.get(apiUrl);
                const data = response.data;

                setUsers(data.content);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, [currentPage]);

    const handlePageChange = (page) => {
        if (page >= 0 && page < totalPages) {
            setCurrentPage(page);
        }
    };

    const newItem = () => {
        navigate('/admin/UserForm/0');
    };

    const editItem = (id) => {
        navigate(`/admin/UserForm/${id}`);
    };

    return (
        <div className="container">
            <div class="card" style={{ boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)' }}>
                <div class="card-header">
                    <h1>User List</h1>
                </div>
                <div class="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button
                                            className="btn btn-warning btn-sm"
                                            onClick={() => editItem(user.id)}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div class="card-footer">
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

export default UserList;
