import React from 'react';
import Item from '../Item/Item';
import './Cart.css'
const Cart = ({cart}) => {
    if(cart.length <= 4){
        return (
            <div className='cart'>
                <h4>Selected iPhones</h4>
                  
                    <Item cart={cart}></Item>
                    <button className='btn1'>Choose one</button>
                    <button className='btn2'>Select again</button>
                
                    
            </div>
        
        );
    }
    else{
        return Cart ;
    }
     
   
};

export default Cart;