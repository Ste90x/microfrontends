import React, { useState, useEffect } from "react";
import "./ProductSuggestionBar.scss";
import Product from "../Product/Product";
import axios from "axios";

const ProductSuggestionBar = () => {
  const [productsState, setProductsState] = useState([]);
  const appsHookId = "#apps-hook";

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
    const productSelectedEvent = new CustomEvent("selectedProductId", { detail: event.target.id });
    if (document.querySelector(appsHookId) !== null) {
      document.querySelector(appsHookId).dispatchEvent(productSelectedEvent);
    } else {
      console.log(`No element with class ${appsHookId} found`)
    }
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
