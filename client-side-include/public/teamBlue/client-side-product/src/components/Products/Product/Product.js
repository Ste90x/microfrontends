import React from "react";
import "./Product.scss";

const Product = props => (
  <div className="Product" >
    <h2 onClick={props.delete}>{props.name}</h2>
    <p>Price: {props.price}</p>
    <p>{props.description}</p>
    <img src={props.picture} alt={props.name}/>
    <button>Add to Basket</button>
  </div>
);

export default Product;
