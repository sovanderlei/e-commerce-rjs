import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminSidebar.css'; // Importa os estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa Font Awesome
import { faUsers, faFileAlt, faChartPie, faCog } from '@fortawesome/free-solid-svg-icons'; // Ícones usados

const AdminSidebar = () => {
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    return (
        <div className="sidebar-container">
            <h5 className="sidebar-title">Admin Menu</h5>

            <ul className="list-unstyled">

                <li>
                    <button
                        className="sidebar-button"
                        onClick={() => navigate('/admin')}
                    >
                        <FontAwesomeIcon icon={faFileAlt} className="sidebar-icon" />
                        Main
                    </button>
                </li>

                <li>
                    <button
                        className={`sidebar-button ${activeMenu === 'cadastro' ? 'sidebar-active' : ''}`}
                        onClick={() => toggleMenu('cadastro')}
                    >
                        <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
                        Register
                    </button>
                    {activeMenu === 'cadastro' && (
                        <ul className="sidebar-submenu">
                            <li>
                                <button onClick={() => navigate('/admin/UserList')}>
                                    User
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate('/admin/CategoryList')}>
                                    Category
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate('/admin/ProductList')}>
                                    Product
                                </button>
                            </li>
                        </ul>
                    )}
                </li>

                <li>
                    <button
                        className="sidebar-button"
                        onClick={() => navigate('/admin/relatorios')}
                    >
                        <FontAwesomeIcon icon={faFileAlt} className="sidebar-icon" />
                        Reports
                    </button>
                </li>

                <li>
                    <button
                        className={`sidebar-button ${activeMenu === 'dashboard' ? 'sidebar-active' : ''}`}
                        onClick={() => toggleMenu('dashboard')}
                    >
                        <FontAwesomeIcon icon={faChartPie} className="sidebar-icon" />
                        Dashboard
                    </button>
                    {activeMenu === 'dashboard' && (
                        <ul className="sidebar-submenu">
                            <li>
                                <button onClick={() => navigate('/admin/dashboard/1')}>
                                    Dashboard 1
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate('/admin/dashboard/2')}>
                                    Dashboard 2
                                </button>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;
