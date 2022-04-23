import React from 'react';

const Item = ({cart}) => {
     let name = [];
    for(const product of cart){

        name = name + ' ' + product.name;
    }
  
    return (
        <div>
            <h2> {name} </h2> 
        </div>
    );
};

export default Item;