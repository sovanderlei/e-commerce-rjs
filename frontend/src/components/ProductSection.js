import React from 'react';
import ProductAddItem from '../components/ProductAddItem';


function ProductItem({ product }) {
    return (
        <div className="box_main">
            <h4 className="shirt_text">{product.name}</h4>
            <p className="price_text">
                Price <span style={{ color: '#262626' }}>${product.price}</span>
            </p>
            <div className="tshirt_img">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="btn_main">
                <div className="buy_bt">
                    <ProductAddItem key={product.id} userId={1} product={product} />
                </div>
                <div className="seemore_bt">
                    <a href="#">See More</a>
                </div>
            </div>
        </div>
    );
}

function ProductSection({ nameController, fashionData }) {
    console.warn(" nameController ", nameController)
    console.warn(" fashionData ", fashionData)
    return (
        <div className="fashion_section">
            <div id={nameController} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {fashionData.items.map((item, index) => (
                        <div
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                            key={index}
                        >
                            <div className="container">
                                <h1 className="fashion_taital">{fashionData.title}</h1>
                                <div className="fashion_section_2">
                                    <div className="row">
                                        {item.products.map((product, productIndex) => (
                                            <div className="col-lg-4 col-sm-4" key={productIndex}>
                                                <ProductItem product={product} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controles do Carrossel */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={"#" + nameController}
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={"#" + nameController}
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default ProductSection;
