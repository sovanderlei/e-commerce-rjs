import React, { useState, useEffect } from 'react';

function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const userId = 1; // Simulação de usuário logado

    useEffect(() => {
        const fetchCartItems = async () => {
            //http://localhost:8080/api/cart/items?userId=1
            const response = await fetch(`http://localhost:8080/api/cart/items?userId=${userId}`);
            const data = await response.json();
            setCartItems(data);
        };
        fetchCartItems();
    }, []);

    const removeFromCart = async (cartItemId) => {
        await fetch(`http://localhost:8080/api/cart/remove?userId=${userId}&cartItemId=${cartItemId}`, {
            method: 'DELETE'
        });
        setCartItems(cartItems.filter(item => item.id !== cartItemId));
    };

    const updateQuantity = async (cartItemId, quantity) => {
        await fetch(`http://localhost:8080/api/cart/update?userId=${userId}&cartItemId=${cartItemId}&quantity=${quantity}`, {
            method: 'PUT'
        });
        setCartItems(cartItems.map(item =>
            item.id === cartItemId ? { ...item, quantity } : item
        ));
    };

    return (
        <div>
            <h1>Minha Sacola</h1>
            {cartItems.map(item => (
                <div key={item.id}>
                    <span>{item.productName}</span> - {item.quantity} x ${item.price}
                    <button onClick={() => removeFromCart(item.id)}>Remover</button>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>Adicionar Mais</button>
                </div>
            ))}
        </div>
    );
}

export default CartPage;
