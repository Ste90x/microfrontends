import React, { useState, useEffect } from "react";
import "./ProductSuggestionBar.scss";
import Product from "../../Product/Product";
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
      .catch(err => console.log(err));
  }, []);

  const onSelectedHandler = (event, index) => {
    console.log(event.target.id);
    localStorage.setItem("selectedProductId", event.target.id);
  };

  return (
    <section className="suggestionBar box columns is-1">
      {productsState.map(product => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          picture={product.image}
          selectedHandler={onSelectedHandler}
        />
      ))}
    </section>
  );
};

export default ProductSuggestionBar;
