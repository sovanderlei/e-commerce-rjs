import React, { useEffect, useState } from 'react';
import ProductSection from '../components/ProductSection';
import logoImg from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DropdownMenu from '../components/DropdownMenu';
import CartButton from '../components/CartButton';

const HomeApp = () => {
    const [fashionData1, setFashionData1] = useState(null);
    const [fashionData2, setFashionData2] = useState(null);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/products');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            const products = data.content;

            // Group products by categoryName
            const groupedByCategory = {};
            products.forEach(product => {
                const { categoryName } = product;
                if (!groupedByCategory[categoryName]) {
                    groupedByCategory[categoryName] = [];
                }
                groupedByCategory[categoryName].push(product);
            });

            const transformCategory = (categoryProducts) => ({
                title: categoryProducts[0]?.categoryName || '',
                items: [
                    {
                        products: categoryProducts.map(product => ({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image || '/images/default-img.png',
                        })),
                    },
                ],
            });

            if (groupedByCategory['Fashion']) {
                setFashionData1(transformCategory(groupedByCategory['Fashion']));
            }
            if (groupedByCategory['Electronics']) {
                setFashionData2(transformCategory(groupedByCategory['Electronics']));
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (!fashionData1 || !fashionData2) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* logo section */}
            <div className="logo_section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="logo">
                                <a href="index.html">
                                    <img src={logoImg} alt="Logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header section */}
            <div className="header_section">
                <div className="container">
                    <div className="containt_main">
                        <div id="mySidenav" className="sidenav">
                            <a href="#" className="closebtn" >&times;</a>
                            <a href="index.html">Home</a>
                            <a href="fashion.html">Fashion</a>
                            <a href="electronic.html">Electronic</a>
                            <a href="jewellery.html">Jewellery</a>
                        </div>
                        <span className="toggle_icon">
                            <img src={require('../images/toggle-icon.png')} alt="Toggle" />
                        </span>
                        <DropdownMenu />
                        <div className="main">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search this blog" />
                                <div className="input-group-append">
                                    <button className="btn btn-secondary" type="button" style={{ backgroundColor: '#f26522', borderColor: '#f26522' }}>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="header_box">
                            <div className="lang_box">
                                <a href="#" title="Language" className="nav-link" data-toggle="dropdown" aria-expanded="true">
                                    <img src={require('../images/flag-uk.png')} alt="flag" className="mr-2" title="United Kingdom" /> English <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
                                </a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">
                                        <img src={require('../images/flag-france.png')} className="mr-2" alt="flag" />
                                        French
                                    </a>
                                </div>
                            </div>
                            <div className="login_menu">

                                <ul>
                                    <CartButton userId={1} />
                                    <li><a href="#">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        <span className="padding_10">Cart</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner section */}
            <div className="banner_section layout_padding">
                <div className="container">
                    <div id="my_slider" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="banner_taital">Get Start <br />Your favorite shopping</h1>
                                        <div className="buynow_bt">
                                            <a href="#">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="banner_taital">Get Start <br />Your favorite shopping</h1>
                                        <div className="buynow_bt">
                                            <a href="#">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#my_slider" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#my_slider" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* fashion section */}
            {fashionData1 && <ProductSection nameController="main_slider" fashionData={fashionData1} />}
            {fashionData2 && <ProductSection nameController="electronic_main_slider" fashionData={fashionData2} />}
        </div>
    );
};

export default HomeApp;
