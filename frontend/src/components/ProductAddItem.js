import React from 'react';

function ProductAddItem({ userId, product }) {
    //const userId = 1; // Simulação de usuário logado

    const addToCart = async () => {
        const response = await fetch(`http://localhost:8080/api/cart/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                productId: product.id,
                productName: product.name,
                price: product.price,
                quantity: 1,
            }),
        });

        if (!response.ok) {
            console.error('Error adding product to cart:', response.statusText);
            return;
        }

        const data = await response.json();
        console.log('Product added to cart:', data);
    };


    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={addToCart}>Buy Now</button>
        </div>
    );
}

export default ProductAddItem;
