import React from "react";

const Product = props => (
  <button
    id={props.id}
    onClick={props.selectedHandler}
    className="Product card column is-2"
  >
    <div id={props.id} className="card-image">
      <figure id={props.id} className="image is-16by9">
        <img
          id={props.id}
          className="prodImg"
          src={props.picture}
          alt={props.name}
        />
      </figure>
    </div>

    <div id={props.id} className="productCard card-content">
      <p id={props.id} className="prodName has-text-weight-bold has-text-left">
        {props.name}
      </p>
      <p id={props.id} className="prodDesc has-text-left">
        {props.description}
      </p>
      <span id={props.id} className="columns">
        <p id={props.id} className="column is-6 has-text-left">
          Price:
        </p>
        <p id={props.id} className="prodPrice column is-6  has-text-right">
          {props.price}€
        </p>
      </span>
    </div>
  </button>
);

export default Product;
