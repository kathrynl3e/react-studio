// TODO: create a component that displays a single bakery item
import React from 'react';
import Button from '@mui/material/Button';

// "props" enable dynamic behavior of components to alter behavior of what we pass in
// props would be the json file full of the bakery item data, and each value for each name will fill in correspondingly
function BakeryItem(props) {
    // can make multiple declarations
    // this is JS code, must wrap in brackets when called
    const image = props.item.image;
    const name = props.item.name;
    const desc = props.item.description;
    const price = props.item.price;
    const index = props.index

    // what we want to put out
    return (
        // card div
        <div className="card flex flex-col">
            <img src={image} alt="bakery item"/>
            <div className="container">
                <h2>{name} </h2>
                <p>{desc}</p>
                <div className="foot flex">
                    <p>${price}</p>
                    <Button variant="contained" onClick={() => props.updateCart(index)}>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default BakeryItem;