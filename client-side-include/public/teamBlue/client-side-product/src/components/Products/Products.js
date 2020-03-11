import React, { useState, useEffect } from "react";
import Product from "./Product/Product";
import axios from "axios";

const Products = () => {
  const [productsState, setProductsState] = useState([
    /*     {
      id: "1",
      name: "Pizza",
      price: "4,90",
      description: "SUCH WOW, MUCH GOOD",
      picture:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: "2",
      name: "Pasta",
      price: "5,90",
      description: "SUCH GOOD, MUCH WOW",
      picture:
        "https://images.unsplash.com/photo-1547567497-fa0a1720f457?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    } */
  ]);

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

  /*   const addProductHandler = product => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(resData => {
        setProductsState(prevProductsState => [
          ...prevProductsState,
          { id: resData.id, ...product }
        ]);
      });
  }; */

  const deleteProductHandler = productId => {
    setProductsState(prevProductsState =>
      prevProductsState.filter(product => product.id !== productId)
    );
  };

  return productsState.map(product => (
    <Product
      delete={() => deleteProductHandler(product.id)}
      key={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
      picture={product.image}
    />
  ));
};

export default Products;
