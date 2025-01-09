import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const CartButton = ({ userId }) => {
    const [cartItems, setCartItems] = useState([]);
    const [show, setShow] = useState(false);

    const fetchCartItems = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/cart/items?userId=${userId}`);
            const data = await response.json();

            const itemsWithTotal = data.map(item => ({
                ...item,
                total: item.price * item.quantity,
            }));

            setCartItems(itemsWithTotal);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    const toggleModal = () => setShow(!show);

    const updateQuantity = (id, delta) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + delta;
                if (newQuantity > 0) {
                    return { ...item, quantity: newQuantity, total: newQuantity * item.price };
                }
            }
            return item;
        }).filter(item => item.quantity > 0);
        setCartItems(updatedCart);
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalCart = cartItems.reduce((acc, item) => acc + item.total, 0);

    useEffect(() => {
        fetchCartItems();
    }, []);

    return (
        <>

            <li><a href="#" onClick={toggleModal} >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span className="padding_10">Cart</span></a>
            </li>
            {show && (
                <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content" style={{ width: '600px' }} >
                            <div className="modal-header">
                                <h5 className="modal-title"><h2><strong>Your Cart</strong></h2></h5>
                                <button className="btn-close" onClick={toggleModal}></button>
                            </div>
                            <div className="modal-body">
                                {cartItems.length > 0 ? (
                                    <div className="d-flex flex-column">
                                        {cartItems.map((item, index) => (
                                            <div key={item.id}>
                                                <div className="d-flex align-items-center py-1">
                                                    <div style={{ width: '70px', }} className="text-center">
                                                        <img
                                                            src={"/images/laptop-img.png"}
                                                            alt={item.productName}
                                                            style={{ width: 50, height: 50 }}
                                                        />
                                                    </div>

                                                    <div style={{ textAlign: 'left', width: '270px', }} className=" ps-2">
                                                        {item.productName}
                                                        {item.description || 'No description available'}
                                                    </div>

                                                    <div style={{ width: '180px', paddingRight: '10px', }}>
                                                        ${item.price.toFixed(2)} * {item.quantity} = <strong>${item.total.toFixed(2)}</strong>
                                                    </div>

                                                    <div style={{ width: '100px', }}
                                                        className="d-flex justify-content-center align-items-center">
                                                        <button
                                                            style={{ marginLeft: '3px' }}
                                                            className="btn btn-sm btn-danger  "
                                                            onClick={() => updateQuantity(item.id, -1)}
                                                        >-</button>
                                                        <button
                                                            style={{ marginLeft: '3px' }}
                                                            className="btn btn-sm btn-success  "
                                                            onClick={() => updateQuantity(item.id, 1)}
                                                        >+</button>
                                                        <button
                                                            style={{ marginLeft: '3px' }}
                                                            className="btn btn-sm btn-warning  "
                                                            onClick={() => removeItem(item.id)}
                                                        >
                                                            <i className="fa fa-trash"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                                {index < cartItems.length - 1 && <hr className="text-muted" />}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>Your cart is empty.</p>
                                )}
                            </div>


                            <div className="modal-footer">
                                <div className="flex-grow-1 text-start">
                                    <h3><strong>Total: ${totalCart.toFixed(2)}</strong> </h3>
                                </div>
                                <button className="btn btn-primary" onClick={() => alert('Purchase finalized!')}>
                                    Finalize
                                </button>
                                <button className="btn btn-secondary" onClick={toggleModal}>
                                    Continue
                                </button>
                                <button className="btn btn-danger" onClick={() => setCartItems([])}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartButton;

