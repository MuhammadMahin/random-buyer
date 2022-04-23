import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) =>{
          
        // do not do this: cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div>
           <div className='title'>
                <h1 className='header'>Random Buyers</h1>
                <h2 className='header2'> Choose 4 Phones</h2>
           </div>
            <div className='shop-container'>
         
               
            <div className="products-container">
             {
                 products.map(product=><Product 
                     key={product.id}
                     product={product}
                     handleAddToCart={handleAddToCart}
                     ></Product>)
        
        }
             
             </div>
              <div className="cart-container">
             <Cart cart={cart}></Cart>
             
              </div>
             </div>
        </div>
    );
};

export default Shop;