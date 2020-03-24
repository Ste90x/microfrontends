import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import axios from "axios";

const ProductSuggestionBar = () => {
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then(res => {
        return res.data;
      })
      .then(resData => {
        const loadedState = [];
        resData.forEach(element => loadedState.push(element));
        setProductsState(loadedState);
      })
      .catch(err => console.error(err));
  }, []);

  const onSelectedHandler = (event, index) => {
    // localStorage.setItem("selectedProductId", event.target.id);
    window.parent.postMessage(
      { selectedProductId: event.target.id },
      "http://localhost:5000"
    );
  };

  return (
    <section className="suggestionBar columns is-1">
      {productsState.length === 0 ? (
        <h1>NETWORK ISSUES</h1>
      ) : (
        productsState.map(product => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            picture={product.image}
            selectedHandler={onSelectedHandler}
          />
        ))
      )}
    </section>
  );
};

export default ProductSuggestionBar;
