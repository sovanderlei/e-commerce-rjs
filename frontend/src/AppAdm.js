import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AdminHeader from './components/AdminHeader';
import AdminSidebar from './components/AdminSidebar';
import AdminFooter from './components/AdminFooter';
import './AppAdm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import HomeAdm from './pages/HomeAdm';
import UserList from './pages/User/UserList';
import UserForm from './pages/User/UserForm';
import CategoryList from './pages/Category/CategoryList';
import CategoryForm from './pages/Category/CategoryForm';
import ProductList from './pages/Product/ProductList';
import ProductForm from './pages/Product/ProductForm';


function AppAdm() {
  const navigate = useNavigate();

  const user = {
    name: 'Vanderlei Soares de Oliveira',
    id: '012457',
    avatar: 'https://i.pinimg.com/736x/3e/aa/24/3eaa245d923949b6f662b8ba07b7a3b2.jpg',
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="container-fluid" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Cabeçalho */}
      <header >
        <AdminHeader user={user} onLogout={handleLogout} />
      </header>

      <div className="row flex-grow-1" style={{ overflow: 'hidden', paddingLeft: '13px' }}>

        <nav className="col-md-2 col-lg-2 bg-light d-none d-md-block" style={{ padding: 0 }}>
          <AdminSidebar />
        </nav>

        <main className="col-md-9 col-lg-10 d-flex flex-column" style={{ maxWidth: '1058px', overflowY: 'auto', backgroundColor: 'white' }}>
          <div className="  flex-grow-1" style={{ margin: '0px', backgroundColor: 'white', padding: '5px' }}>
            <Routes>
              <Route path="/" element={<HomeAdm />} />
              <Route path="/UserList" element={<UserList />} />
              <Route path="/UserForm/:id" element={<UserForm />} />
              <Route path="/CategoryList" element={<CategoryList />} />
              <Route path="/CategoryForm/:id" element={<CategoryForm />} />
              <Route path="/ProductList" element={<ProductList />} />
              <Route path="/ProductForm/:id" element={<ProductForm />} />
              {/* <Route path="/UserForm/*" element={<UserForm />} /> */}
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>

          <footer>
            <AdminFooter />
          </footer>
        </main>
      </div>
    </div>
  );
}

export default AppAdm;
